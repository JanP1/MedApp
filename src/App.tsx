import "./App.css";
import { useUIStore } from "./stores/PageVisibilityStore";

function App() {
  const { currentPage, setPage } = useUIStore();


  return (
    <div className="spa-layout-container">
      <div style={{ padding: "16px", width: "100%", display: "flex", flexDirection: "column"}}>
        {/* Navigation */}
        <div style={{ marginBottom: "16px", width: "100%"}}>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("settings")}>Settings</button>
          <button onClick={() => setPage("profile")}>Profile</button>
          <button onClick={() => setPage("hidden")}>Hidden</button>
        </div>

        {/* Page content */}
        <div style={{ border: "1px solid gray", padding: "16px", borderRadius: "8px", height: "100%" }}>
          {currentPage === "home" && <h1>🏠 Home Page</h1>}
          {currentPage === "settings" && <h1>⚙️ Settings Page</h1>}
          {currentPage === "profile" && <h1>👤 Profile Page</h1>}
          {currentPage === "hidden" && <h1>🙈 Hidden Page</h1>}
        </div>
      </div>
    </div>
  );
}

export default App;
