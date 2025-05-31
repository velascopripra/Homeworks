import { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div
        onClick={() => hasChildren ? setIsOpen(!isOpen) : null}
        style={{
          cursor: hasChildren ? 'pointer' : 'default',
          padding: '10px',
          backgroundColor: '#2b2b2b',
          borderBottom: '1px solid #444',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Link to={item.link} style={{ color: 'white', textDecoration: 'none', flex: 1 }}>
          {item.title}
        </Link>
        {hasChildren && <span style={{ marginLeft: '10px', color: 'white' }}>{isOpen ? '▲' : '▼'}</span>}
      </div>

      {hasChildren && isOpen && (
        <div style={{ paddingLeft: '15px', backgroundColor: '#1f1f1f' }}>
          {item.children.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ menu }) => {
  return (
    <div style={{ width: '250px', background: '#1f1f1f', color: 'white', height: '100vh' }}>
      {menu.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;