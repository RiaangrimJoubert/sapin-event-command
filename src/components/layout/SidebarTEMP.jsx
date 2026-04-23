import {
  LayoutDashboard,
  CalendarDays,
  CheckSquare,
  Users,
  FileText,
  Inbox,
  CreditCard,
  BarChart3,
  Plug,
  Settings,
  HelpCircle,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Events", icon: CalendarDays },
  { label: "Tasks", icon: CheckSquare },
  { label: "Vendors", icon: Users },
  { label: "Templates", icon: FileText },
  { label: "Inbox", icon: Inbox },
  { label: "Payments", icon: CreditCard },
  { label: "Reports", icon: BarChart3 },
  { label: "Integrations", icon: Plug },
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
              <Icon size={18} />
              <span className="nav-item-label">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-spacer" />

      <div className="upgrade-card">
        <div className="upgrade-title">Upgrade reporting</div>
        <div className="upgrade-copy">
          Unlock advanced event insights, sponsor tracking, and region dashboards.
        </div>
        <button className="upgrade-btn" type="button">
          Upgrade now
        </button>
      </div>

      <div className="sidebar-footer">
        <button className="nav-item" type="button">
          <Settings size={18} />
          <span className="nav-item-label">Settings</span>
        </button>

        <button className="nav-item" type="button">
          <HelpCircle size={18} />
          <span className="nav-item-label">Support</span>
        </button>
      </div>
    </aside>
  );
}
