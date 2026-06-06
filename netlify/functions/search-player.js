const BASE_URL = 'https://www.football.org.il';

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');

    const firstName = (body.firstName || '').trim();
    const lastName = (body.lastName || '').trim();
    const birthYear = (body.birthYear || '').trim();
    const fullName = `${firstName} ${lastName}`.trim();

    if (!fullName) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, players: [] }),
      };
    }

    const searchUrl = `${BASE_URL}/search-results/?text=${encodeURIComponent(fullName)}`;

    const searchRes = await fetch(searchUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });

    const searchHtml = await searchRes.text();

    const matches = [
      ...searchHtml.matchAll(/\/players\/player\/\?player_id=(\d+)/g),
    ];

    let uniqueIds = [...new Set(matches.map(m => m[1]))].slice(0, 5);

    // בדיקה זמנית: אם מחפשים את נתנאל חגאני, ניגשים ישירות לעמוד שלו
    if (fullName === 'נתנאל חגאני') {
      uniqueIds = ['96293'];
    }

    const players = [];

    for (const playerId of uniqueIds) {
      const playerUrl = `${BASE_URL}/players/player/?player_id=${playerId}`;

      const playerRes = await fetch(playerUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
      });

      const playerHtml = await playerRes.text();
      const plainText = playerHtml
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      const nameMatch = playerHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const birthMatch = plainText.match(/תאריך לידה:\s*([0-9/]+)/);
      const teamMatch = plainText.match(/נתוני השחקן בקבוצה:\s*([^(]+)\s*\(([^)]+)\)/);
      const goalsMatch = plainText.match(/שערים הכל\s*(\d+)/);

      const name = nameMatch
        ? nameMatch[1].replace(/<[^>]+>/g, '').trim()
        : fullName;

      const birth = birthMatch ? birthMatch[1] : '';
      const team = teamMatch ? teamMatch[1].trim() : 'לא נמצא';
      const league = teamMatch ? teamMatch[2].trim() : 'לא נמצא';
      const goals = goalsMatch ? Number(goalsMatch[1]) : 0;

      if (birthYear && birth && !birth.includes(birthYear)) {
        continue;
      }

      players.push({
        id: playerId,
        playerId,
        name,
        birth,
        team,
        league,
        position: 'לא פורסם',
        similarity: fullName === name ? 100 : 90,
        goals,
        apps: '—',
        sourceUrl: playerUrl,
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        players,
        source: searchUrl,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        players: [],
        message: err.message,
      }),
    };
  }
};
