import TasksCard from "../components/dashboard/TasksCard";
import MeetingsCard from "../components/dashboard/MeetingsCard";
import ProjectsCard from "../components/dashboard/ProjectsCard";
import UpcomingEventsCard from "../components/dashboard/UpcomingEventsCard";
import AlertsCard from "../components/dashboard/AlertsCard";
import TemplatesCard from "../components/dashboard/TemplatesCard";

export default function Dashboard() {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-top">
        <TasksCard />
        <MeetingsCard />
        <ProjectsCard />
      </div>

      <div className="dashboard-middle">
        <UpcomingEventsCard />
        <AlertsCard />
      </div>

      <div className="dashboard-bottom">
        <TemplatesCard />
      </div>
    </div>
  );
}
