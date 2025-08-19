import "./App.css";
import FormPage from "./components/FormPage";
import MainPage from "./components/MainPage";
import SettingsPage from "./components/SettingsPage";
import { useUIStore } from "./stores/PageVisibilityStore";

function App() {
  const { currentPage, setPage } = useUIStore();


  return (
    <div className="spa-layout-container">
        {/* Navigation */}
        <div style={{ marginBottom: "16px", width: "100%"}}>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("settings")}>Settings</button>
        </div>

        {/* Page content */}
        <div className="page-container">
          {currentPage === "home" && <MainPage/>}
          {currentPage === "settings" && <SettingsPage/>}
          {currentPage === "form" && <FormPage/>}
        </div>
    </div>
  );
}

export default App;
