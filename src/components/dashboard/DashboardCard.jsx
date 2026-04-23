export default function DashboardCard({ title, linkText = "See All", children }) {
  return (
    <section className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className="card-link">{linkText}</span>
      </div>
      {children}
    </section>
  );
}
