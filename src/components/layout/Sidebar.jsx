import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Handshake,
  MessageSquareQuote,
  BellRing,
  Database,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "events", label: "Events", icon: CalendarDays },
  { key: "staff", label: "Staff", icon: Users },
  { key: "partners", label: "Partners", icon: Handshake },
  { key: "testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { key: "chase-tasks", label: "Chase Tasks", icon: BellRing },
  { key: "data", label: "Data", icon: Database },
  { key: "templates", label: "Templates", icon: FileText },
  { key: "reports", label: "Reports", icon: BarChart3 },
];

export default function Sidebar({ activeView, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand-row">
        <div className="brand-logo">S</div>
        <div>
          <div className="brand-title">SAPIN</div>
          <div className="brand-subtitle">Event Command</div>
        </div>
      </div>

      <nav className="nav-list">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.key;

          return (
            <button
              key={item.key}
              className={`nav-item ${isActive ? "active" : ""}`}
              type="button"
              onClick={() => onNavigate?.(item.key)}
            >
              <Icon size={18} strokeWidth={2} />
              <span className="nav-item-label">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-spacer" />

      <div className="sidebar-footer">
        <button
          className={`nav-item ${activeView === "settings" ? "active" : ""}`}
          type="button"
          onClick={() => onNavigate?.("settings")}
        >
          <Settings size={18} strokeWidth={2} />
          <span className="nav-item-label">Settings</span>
        </button>
      </div>
    </aside>
  );
}
