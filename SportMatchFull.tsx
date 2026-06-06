04:32:43.225 Running build in Washington, D.C., USA (East) – iad1
04:32:43.225 Build machine configuration: 4 cores, 8 GB
04:32:43.401 Cloning github.com/haganirami-png/sportmatch (Branch: main, Commit: 59863a0)
04:32:43.655 Cloning completed: 254.000ms
04:32:43.767 Restored build cache from previous deployment (F9jdaMovkAAgB3jfoKthiURsNoUV)
04:32:43.950 Running "vercel build"
04:32:43.966 Vercel CLI 54.9.0
04:32:44.423 Installing dependencies...
04:32:46.119 
04:32:46.119 up to date in 2s
04:32:46.120 
04:32:46.120 7 packages are looking for funding
04:32:46.120   run `npm fund` for details
04:32:46.148 Running "npm run build"
04:32:46.236 
04:32:46.237 > sportmatch@1.0.0 build
04:32:46.237 > vite build
04:32:46.237 
04:32:46.426 vite v4.5.14 building for production...
04:32:46.453 transforming...
04:32:46.693 ✓ 9 modules transformed.
04:32:46.694 ✓ built in 266ms
04:32:46.694 [vite:esbuild] Transform failed with 9 errors:
04:32:46.694 /vercel/path0/SportMatchFull.tsx:1179:9: ERROR: The symbol "SplashScreen" has already been declared
04:32:46.694 /vercel/path0/SportMatchFull.tsx:1181:9: ERROR: The symbol "VerStep0" has already been declared
04:32:46.694 /vercel/path0/SportMatchFull.tsx:1208:9: ERROR: The symbol "VerStep1" has already been declared
04:32:46.695 /vercel/path0/SportMatchFull.tsx:1244:9: ERROR: The symbol "VerStep2" has already been declared
04:32:46.695 /vercel/path0/SportMatchFull.tsx:1290:9: ERROR: The symbol "Screen4" has already been declared
04:32:46.695 ...
04:32:46.695 file: /vercel/path0/SportMatchFull.tsx:1179:9
04:32:46.695 
04:32:46.695 The symbol "SplashScreen" has already been declared
04:32:46.695 1177|  /* ── BOTTOM NAV ── */
04:32:46.695 1178|  /* ═══ SPLASH SCREEN ═══ */
04:32:46.695 1179|  function SplashScreen({ onDone }) { return null; }
04:32:46.695    |           ^
04:32:46.695 1180|  
04:32:46.695 1181|  function VerStep0({ onNext }) {
04:32:46.695 
04:32:46.695 The symbol "VerStep0" has already been declared
04:32:46.695 1179|  function SplashScreen({ onDone }) { return null; }
04:32:46.696 1180|  
04:32:46.696 1181|  function VerStep0({ onNext }) {
04:32:46.696    |           ^
04:32:46.696 1182|    const [first, setFirst] = useState("");
04:32:46.696 1183|    const [last, setLast] = useState("");
04:32:46.696 
04:32:46.696 The symbol "VerStep1" has already been declared
04:32:46.696 1206|  }
04:32:46.696 1207|  
04:32:46.696 1208|  function VerStep1({ player, results, onDone }) {
04:32:46.696    |           ^
04:32:46.696 1209|    const [step, setStep] = useState(0);
04:32:46.696 1210|    const steps = ["מתחבר ל-football.org.il","מחפש לפי שם ושנת לידה","שולף נתוני שחקן","בודק רישום תקף"];
04:32:46.696 
04:32:46.696 The symbol "VerStep2" has already been declared
04:32:46.696 1242|  }
04:32:46.697 1243|  
04:32:46.697 1244|  function VerStep2({ results, onNext }) {
04:32:46.697    |           ^
04:32:46.697 1245|    const [sel, setSel] = useState(null);
04:32:46.697 1246|    const list = results || [];
04:32:46.697 
04:32:46.697 The symbol "Screen4" has already been declared
04:32:46.697 1288|  
04:32:46.697 1289|  
04:32:46.697 1290|  function Screen4({ player, onNext }) {
04:32:46.697    |           ^
04:32:46.697 1291|    const [phase, setPhase] = useState(0); // 0=blink,1=turn,2=smile,3=done
04:32:46.697 1292|    const [subPct, setSubPct] = useState(0);
04:32:46.697 
04:32:46.697 The symbol "Screen5" has already been declared
04:32:46.697 1394|    );
04:32:46.697 1395|  }
04:32:46.697 1396|  function Screen5({ player, onNext }) {
04:32:46.698    |           ^
04:32:46.698 1397|    const pct = useTimer(3000, onNext);
04:32:46.698 1398|    const score = Math.round(30 + (pct/100)*64);
04:32:46.698 
04:32:46.698 The symbol "Screen6" has already been declared
04:32:46.698 1462|    );
04:32:46.698 1463|  }
04:32:46.698 1464|  function Screen6({ player, onNext }) {
04:32:46.698    |           ^
04:32:46.698 1465|    const [show, setShow] = useState(false);
04:32:46.698 1466|    useEffect(() => { setTimeout(() => setShow(true), 100); }, []);
04:32:46.698 
04:32:46.698 The symbol "StatBar" has already been declared
04:32:46.698 1516|    );
04:32:46.698 1517|  }
04:32:46.698 1518|  function StatBar({ value, max, color }) {
04:32:46.698    |           ^
04:32:46.698 1519|    return (
04:32:46.698 1520|      <div style={{ flex:1, height:4, background:C.border, borderRadius:2, overflow:"hidden" }}>
04:32:46.699 
04:32:46.699 The symbol "Screen7" has already been declared
04:32:46.699 1523|    );
04:32:46.699 1524|  }
04:32:46.699 1525|  function Screen7({ player, onGoHome }) {
04:32:46.699    |           ^
04:32:46.699 1526|    const [tab, setTab] = useState("overview");
04:32:46.699 1527|  
04:32:46.699 
04:32:46.699 error during build:
04:32:46.699 Error: Transform failed with 9 errors:
04:32:46.700 /vercel/path0/SportMatchFull.tsx:1179:9: ERROR: The symbol "SplashScreen" has already been declared
04:32:46.700 /vercel/path0/SportMatchFull.tsx:1181:9: ERROR: The symbol "VerStep0" has already been declared
04:32:46.700 /vercel/path0/SportMatchFull.tsx:1208:9: ERROR: The symbol "VerStep1" has already been declared
04:32:46.700 /vercel/path0/SportMatchFull.tsx:1244:9: ERROR: The symbol "VerStep2" has already been declared
04:32:46.701 /vercel/path0/SportMatchFull.tsx:1290:9: ERROR: The symbol "Screen4" has already been declared
04:32:46.701 ...
04:32:46.701     at failureErrorWithLog (/vercel/path0/node_modules/esbuild/lib/main.js:1649:15)
04:32:46.701     at /vercel/path0/node_modules/esbuild/lib/main.js:847:29
04:32:46.701     at responseCallbacks.<computed> (/vercel/path0/node_modules/esbuild/lib/main.js:703:9)
04:32:46.701     at handleIncomingPacket (/vercel/path0/node_modules/esbuild/lib/main.js:762:9)
04:32:46.701     at Socket.readFromStdout (/vercel/path0/node_modules/esbuild/lib/main.js:679:7)
04:32:46.701     at Socket.emit (node:events:509:28)
04:32:46.701     at addChunk (node:internal/streams/readable:563:12)
04:32:46.702     at readableAddChunkPushByteMode (node:internal/streams/readable:514:3)
04:32:46.702     at Readable.push (node:internal/streams/readable:394:5)
04:32:46.703     at Pipe.onStreamRead (node:internal/stream_base_commons:189:23)
04:32:46.716 Error: Command "npm run build" exited with 1
