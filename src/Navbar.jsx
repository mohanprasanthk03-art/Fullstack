import React from "react";

const menuItems = [
  { name: "Dashboard", icon: "⌂" },
  { name: "Projects", icon: "▦" },
  { name: "Tasks", icon: "☑" },
  { name: "Team", icon: "♧" },
  { name: "Reports", icon: "▤" },
  { name: "Settings", icon: "⚙" },
];

function Navbar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-icon">✦</span>
        <span>PulseWorks AI</span>
      </div>

      <nav className="nav-menu">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`nav-item ${
              activePage === item.name ? "active" : ""
            }`}
            onClick={() => setActivePage(item.name)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Navbar;