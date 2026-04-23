import { ArrowUpRight } from "lucide-react";
import DashboardCard from "./DashboardCard";

const templates = [
  {
    tag: "Finance",
    title: "Conference Schedule",
    copy: "Track the running order and event flow for SAPIN sessions.",
  },
  {
    tag: "Guest Management",
    title: "Seating Chart",
    copy: "Plan guest placement and venue layout for premium event experiences.",
  },
  {
    tag: "Vendors",
    title: "Vendor Contract",
    copy: "Keep supplier terms and onboarding details structured and easy to access.",
  },
  {
    tag: "Feedback",
    title: "Feedback Form",
    copy: "Capture attendee responses, follow-up notes, and event quality insights.",
  },
];

export default function TemplatesCard() {
  return (
    <DashboardCard title="Recent Templates">
      <div className="template-grid">
        {templates.map((template) => (
          <div className="template-card" key={template.title}>
            <div className="template-top">
              <span className="template-tag">{template.tag}</span>
              <span className="template-arrow">
                <ArrowUpRight size={16} />
              </span>
            </div>

            <div className="template-title">{template.title}</div>
            <div className="template-copy">{template.copy}</div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
