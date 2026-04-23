const statCards = [
  { label: "THIS WEEK", value: 0 },
  { label: "NEXT WEEK", value: 0 },
  { label: "REST OF MONTH", value: 0 },
  { label: "LATER", value: 0 },
  { label: "FLAGS OPEN", value: 0, danger: true },
  { label: "EVENTS W/ FLAGS", value: 0 },
];

const groups = [
  { title: "This Week", count: 0, dotClass: "urgent" },
  { title: "Next Week", count: 0, dotClass: "soon" },
  { title: "Rest of This Month", count: 0, dotClass: "month" },
  { title: "Later This Year", count: 0, dotClass: "later" },
];

export default function Events() {
  return (
    <div className="events-page-minimal">
      <section className="events-stats-minimal">
        {statCards.map((item) => (
          <div className="events-stat-minimal" key={item.label}>
            <div className="events-stat-minimal-label">{item.label}</div>
            <div className={`events-stat-minimal-value ${item.danger ? "danger" : ""}`}>
              {item.value}
            </div>
          </div>
        ))}
      </section>

      <section className="events-groups-minimal">
        {groups.map((group) => (
          <div className="events-group-minimal" key={group.title}>
            <div className="events-group-minimal-header">
              <div className="events-group-minimal-title-wrap">
                <span className={`events-group-dot ${group.dotClass}`} />
                <h2 className="events-group-minimal-title">{group.title}</h2>
              </div>
              <div className="events-group-minimal-count">{group.count} events</div>
            </div>

            <div className="events-group-minimal-divider" />

            <div className="events-group-empty">Nothing scheduled</div>
          </div>
        ))}
      </section>
    </div>
  );
}
