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
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Events", icon: CalendarDays },
  { label: "Staff", icon: Users },
  { label: "Partners", icon: Handshake },
  { label: "Testimonials", icon: MessageSquareQuote },
  { label: "Chase Task", icon: BellRing },
  { label: "Data", icon: Database },
  { label: "Templates", icon: FileText },
  { label: "Reports", icon: BarChart3 },
];

export default function Sidebar() {
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

          return (
            <button
              key={item.label}
              className={`nav-item ${item.active ? "active" : ""}`}
              type="button"
            >
              <Icon size={18} strokeWidth={2} />
              <span className="nav-item-label">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-spacer" />

      <div className="sidebar-footer">
        <button className="nav-item" type="button">
          <Settings size={18} strokeWidth={2} />
          <span className="nav-item-label">Settings</span>
        </button>
      </div>
    </aside>
  );
}
