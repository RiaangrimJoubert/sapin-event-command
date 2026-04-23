import { CalendarDays } from "lucide-react";
import DashboardCard from "./DashboardCard";

const meetings = [
  {
    title: "Absa sponsor sync",
    time: "10:00 AM to 10:30 AM",
    sub: "Khali, Daniel, Alani",
  },
  {
    title: "Venue walk-through",
    time: "11:15 AM to 11:45 AM",
    sub: "Nthaki, Venue Manager",
  },
];

export default function MeetingsCard() {
  return (
    <DashboardCard title="Today's Meetings">
      <div className="simple-list">
        {meetings.map((meeting) => (
          <div className="simple-row" key={meeting.title}>
            <div className="row-soft-icon">
              <CalendarDays size={16} />
            </div>
            <div>
              <div className="row-title">{meeting.title}</div>
              <div className="row-meta">{meeting.time}</div>
              <div className="row-meta">{meeting.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <span className="text-link-small">+ Schedule Meeting</span>
    </DashboardCard>
  );
}
