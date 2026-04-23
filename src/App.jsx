import { useState } from "react";
import AppShell from "./components/layout/AppShell";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Staff from "./pages/Staff";
import Partners from "./pages/Partners";
import Testimonials from "./pages/Testimonials";
import ChaseTasks from "./pages/ChaseTasks";
import DataPage from "./pages/DataPage";
import Templates from "./pages/Templates";
import Reports from "./pages/Reports";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  const [activeView, setActiveView] = useState("dashboard");

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "events":
        return <Events />;
      case "staff":
        return <Staff />;
      case "partners":
        return <Partners />;
      case "testimonials":
        return <Testimonials />;
      case "chase-tasks":
        return <ChaseTasks />;
      case "data":
        return <DataPage />;
      case "templates":
        return <Templates />;
      case "reports":
        return <Reports />;
      case "settings":
        return <SettingsPage />;
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
