import { useState } from "react"

export default function App() {
  const [tab, setTab] = useState("home")
  return (
    <div style={{ background:"#050A0E", minHeight:"100vh", color:"#E8F4F8", fontFamily:"Arial", direction:"rtl" }}>
      <div style={{ padding:20, textAlign:"center", paddingTop:60 }}>
        <div style={{ fontSize:36, fontWeight:900, color:"#17C964", marginBottom:10 }}>SportMatch</div>
        <div style={{ color:"#5A8090", marginBottom:40 }}>מצא מאמן ספורטיבי</div>
        <div style={{ display:"flex", gap:10, justifyContent:"center" }}>
          <button onClick={()=>setTab("home")} style={{ background: tab==="home"?"#17C964":"#0D1E2A", border:"none", borderRadius:12, padding:"10px 20px", color: tab==="home"?"#031014":"#E8F4F8", cursor:"pointer", fontFamily:"Arial", fontSize:14 }}>דף הבית</button>
          <button onClick={()=>setTab("profile")} style={{ background: tab==="profile"?"#17C964":"#0D1E2A", border:"none", borderRadius:12, padding:"10px 20px", color: tab==="profile"?"#031014":"#E8F4F8", cursor:"pointer", fontFamily:"Arial", fontSize:14 }}>פרופיל</button>
        </div>
        <div style={{ marginTop:40, color:"#17C964", fontSize:18 }}>
          {tab === "home" ? "🏆 מצא מאמן קרוב אליך" : "👤 הפרופיל שלך"}
        </div>
      </div>
    </div>
  )
}
