const DashboardLayout = ({ title, list, selectedId, onSelect, children }) => {
  return (
    <div className="Dashboard">
      <aside className="Sidebar">
        <h3 className="Sidebar-Title">{title}</h3>
        <ul>
          {list.map((item) => (
            <li
              key={item.id}
              className={selectedId === item.id ? "active" : ""}
              onClick={() => onSelect(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </aside>

      <main className="Content">
        <div className="Al-Ds-Viewer">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;