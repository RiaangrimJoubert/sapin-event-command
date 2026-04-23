import DashboardCard from "./DashboardCard";

const alerts = [
  {
    title: "Speaker contract signed for Networking Event",
    sub: "Public event pipeline",
  },
  {
    title: "Workshop budget approved",
    sub: "Two Day Workshop",
  },
  {
    title: "Venue confirmed for Premier Event",
    sub: "Member experience",
  },
  {
    title: "Photo vendor follow-up needed",
    sub: "Operations checklist",
  },
];

export default function AlertsCard() {
  return (
    <DashboardCard title="Alerts">
      <div className="alert-list">
        {alerts.map((alert) => (
          <div className="alert-row" key={alert.title}>
            <div className="alert-green-dot" />
            <div>
              <div className="alert-text">{alert.title}</div>
              <div className="alert-sub">{alert.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
