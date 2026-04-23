import { Search, Bell, Plus } from "lucide-react";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="search-wrap">
        <Search className="search-icon" size={18} />
        <input
          className="search-input"
          type="text"
          placeholder="Search events, tasks, sponsors"
        />
      </div>

      <div className="topbar-actions">
        <button className="primary-btn" type="button">
          <Plus size={18} />
          New Event
        </button>

        <button className="icon-btn" type="button" aria-label="Notifications">
          <Bell size={18} />
          <span className="icon-dot" />
        </button>

        <div className="profile-card">
          <div className="profile-avatar">RJ</div>
          <div>
            <div className="profile-name">Riaan Joubert</div>
            <div className="profile-role">SAPIN Event Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
