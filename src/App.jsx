import React, { useState } from "react";
import Navbar from "./Navbar";
import "./App.css";

const tasks = [
  {
    task: "Review AI annotations",
    project: "Image Labeling",
    assignee: "AK",
    status: "Completed",
  },
  {
    task: "Validate dataset",
    project: "Speech to Text",
    assignee: "SP",
    status: "In Progress",
  },
  {
    task: "Update evaluation script",
    project: "Model QA",
    assignee: "AK",
    status: "Pending",
  },
  {
    task: "Prepare OCR report",
    project: "DC Reporting",
    assignee: "MK",
    status: "In Progress",
  },
  {
    task: "Sync tag DB to database",
    project: "Data Pipeline",
    assignee: "RK",
    status: "Pending",
  },
];

const projects = [
  { name: "Image Labeling", members: 16, icon: "▣", color: "purple" },
  { name: "Speech to Text", members: 14, icon: "🎙", color: "blue" },
  { name: "Model QA", members: 51, icon: "▧", color: "pink", status: "On Hold" },
  { name: "DC Reporting", members: 33, icon: "▤", color: "green" },
  { name: "Data Pipeline", members: 24, icon: "♧", color: "cyan" },
];

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [search, setSearch] = useState("");

  const stats = [
    { title: "Total Projects", value: "656", icon: "▣", color: "purple" },
    { title: "Total Tasks", value: "12,897", icon: "☷", color: "blue" },
    { title: "Active Members", value: "96", icon: "♧", color: "green" },
    { title: "Pending Tasks", value: "94", icon: "◷", color: "yellow" },
  ];

  const filteredTasks = tasks.filter((item) =>
    `${item.task} ${item.project} ${item.assignee}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const filteredProjects = projects.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content m-">
        <header className="topbar">
          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search projects, tasks, or team..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="top-actions">
            <span className="notification">●</span>
            <div className="profile">P</div>
          </div>
        </header>

        <section className="dashboard-content">
          <div className="welcome-section">
            <div>
              <h1>
                {activePage === "Dashboard"
                  ? "Welcome back, Mohan "
                  : activePage}
              </h1>
              <p>
                Here's what's happening at PulseWorks AI today.
              </p>
            </div>

            <span className="date">Wed, Nov 25, 2026</span>
          </div>

          <section className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.title}>
                <div className={`stat-icon ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <p>{stat.title}</p>
                  <h2>{stat.value}</h2>
                </div>
              </div>
            ))}
          </section>

          <section className="dashboard-grid">
            <div className="panel recent-panel">
              <div className="panel-header">
                <h3>Recent Tasks</h3>
                <button className="view-all">View All →</button>
              </div>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Project</th>
                      <th>Assignee</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredTasks.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <span className="task-check">□</span>
                          {item.task}
                        </td>
                        <td>{item.project}</td>
                        <td>
                          <span className="assignee">
                            {item.assignee}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`status ${
                              item.status === "Completed"
                                ? "completed"
                                : item.status === "Pending"
                                ? "pending"
                                : "progress"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel projects-panel">
              <div className="panel-header">
                <h3>Active Projects</h3>
                <button className="view-all">View All →</button>
              </div>

              <div className="project-list">
                {filteredProjects.map((project) => (
                  <div className="project-item" key={project.name}>
                    <div className={`project-icon ${project.color}`}>
                      {project.icon}
                    </div>

                    <div className="project-details">
                      <h4>{project.name}</h4>
                      <p>{project.members} members</p>
                    </div>

                    <span
                      className={`status ${
                        project.status === "On Hold"
                          ? "pending"
                          : "completed"
                      }`}
                    >
                      {project.status || "Active"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;