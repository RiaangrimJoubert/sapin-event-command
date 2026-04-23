import DashboardCard from "./DashboardCard";

const events = [
  {
    title: "Investor Networking Evening",
    days: "4 days left",
    progress: 88,
    className: "light",
  },
  {
    title: "Two Day Workshop",
    days: "15 days left",
    progress: 54,
    className: "teal",
  },
  {
    title: "Youth Event",
    days: "22 days left",
    progress: 28,
    className: "green",
  },
];

export default function UpcomingEventsCard() {
  return (
    <DashboardCard title="Upcoming Events">
      <div className="event-cards">
        {events.map((event) => (
          <div className={`event-card ${event.className}`} key={event.title}>
            <div className="event-card-top">
              <div className="avatar-stack">
                <div className="avatar-dot" />
                <div className="avatar-dot" />
              </div>
              <div className="event-badge">{event.days}</div>
            </div>

            <div className="event-title">{event.title}</div>

            <div className="event-progress-label">Progress</div>
            <div className="event-progress-track">
              <div
                className="event-progress-fill"
                style={{ width: `${event.progress}%` }}
              />
            </div>
            <div className="event-progress-value">{event.progress}%</div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
