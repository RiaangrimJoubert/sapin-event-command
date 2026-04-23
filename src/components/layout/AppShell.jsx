import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({ children, activeView, onNavigate }) {
  return (
    <div className="app-bg">
      <div className="app-frame">
        <div className="app-grid">
          <Sidebar activeView={activeView} onNavigate={onNavigate} />
          <main className="main-panel">
            <Topbar />
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
