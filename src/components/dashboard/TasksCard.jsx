import DashboardCard from "./DashboardCard";

const tasks = [
  {
    title: "Finalize speakers for Johannesburg Preview",
    tag: "Two Hour Seminar",
  },
  {
    title: "Approve workshop workbook print run",
    tag: "Two Day Workshop",
  },
  {
    title: "Confirm venue for Premier Event",
    tag: "Premier Event",
  },
];

export default function TasksCard() {
  return (
    <DashboardCard title="Today's Tasks">
      <div className="simple-list">
        {tasks.map((task) => (
          <div className="simple-row" key={task.title}>
            <div className="row-icon-circle" />
            <div>
              <div className="row-title">{task.title}</div>
              <div className="row-sub">{task.tag}</div>
            </div>
          </div>
        ))}
      </div>

      <span className="text-link-small">+ Add Task</span>
    </DashboardCard>
  );
}
