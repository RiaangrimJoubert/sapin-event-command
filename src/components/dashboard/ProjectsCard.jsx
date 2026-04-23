import DashboardCard from "./DashboardCard";

const legend = [
  { label: "Two Hour Seminars", color: "var(--cyan)" },
  { label: "Workshops", color: "var(--cyan-deep)" },
  { label: "Networking", color: "var(--green)" },
];

export default function ProjectsCard() {
  return (
    <DashboardCard title="Projects Worked">
      <div className="projects-wrap">
        <div className="ring-chart">
          <div className="ring-center">
            <div>
              <div className="ring-number">4</div>
              <div className="ring-label">active event types</div>
            </div>
          </div>
        </div>

        <div className="legend-list">
          {legend.map((item) => (
            <div className="legend-item" key={item.label}>
              <span
                className="legend-dot"
                style={{ background: item.color }}
              />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </DashboardCard>
  );
}
