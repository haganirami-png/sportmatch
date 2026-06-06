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
        body: JSON.stringify({
          success: false,
          players: [],
        }),
      };
    }

    const searchUrl =
      `${BASE_URL}/search-results/?text=` +
      encodeURIComponent(fullName);

    const searchRes = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    const searchHtml = await searchRes.text();

    const matches = [
      ...searchHtml.matchAll(
        /\/players\/player\/\?player_id=(\d+)/g
      ),
    ];

    const uniqueIds = [...new Set(matches.map(m => m[1]))].slice(0, 5);

    const players = [];

    for (const playerId of uniqueIds) {
      try {
        const playerUrl =
          `${BASE_URL}/players/player/?player_id=${playerId}`;

        const playerRes = await fetch(playerUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0',
          },
        });

        const playerHtml = await playerRes.text();

        const nameMatch =
          playerHtml.match(/<h1[^>]*>(.*?)<\/h1>/i);

        const birthMatch =
          playerHtml.match(/תאריך לידה[:\s]*([0-9/]+)/);

        const teamMatch =
          playerHtml.match(/קבוצה[:\s]*([^<]+)/);

        const goalsMatch =
          playerHtml.match(/שערים.*?(\d+)/);

        const name = nameMatch?.[1]
          ?.replace(/<[^>]+>/g, '')
          ?.trim();

        const birth = birthMatch?.[1] || '';

        if (
          birthYear &&
          birth &&
          !birth.includes(birthYear)
        ) {
          continue;
        }

        players.push({
          id: playerId,
          name: name || fullName,
          birth,
          team: teamMatch?.[1]?.trim() || 'לא נמצא',
          league: 'התאחדות לכדורגל',
          similarity: 95,
          goals: Number(goalsMatch?.[1] || 0),
          apps: '—',
        });
      } catch (e) {
        console.log(e);
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        players,
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
