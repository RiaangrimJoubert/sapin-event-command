import { useState } from "react";
import AppShell from "./components/layout/AppShell";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";

export default function App() {
  const [activeView, setActiveView] = useState("dashboard");

  const renderView = () => {
    switch (activeView) {
      case "events":
        return <Events />;
      case "dashboard":
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppShell activeView={activeView} onNavigate={setActiveView}>
      {renderView()}
    </AppShell>
  );
}
