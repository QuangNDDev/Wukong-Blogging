const DashboardHeading = ({ title = "", desc = "", children }) => {
  return (
    <div className="mb-10 flex items-start justify-between">
      <div>
        <h1 className="text-3xl font-semibold text-primary dashboard-heading">
          {title}
        </h1>
        <p className="dashboard-short-desc">{desc}</p>
      </div>
      {children}
    </div>
  );
};

export default DashboardHeading;
