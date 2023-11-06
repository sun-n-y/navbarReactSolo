import { FaBars } from 'react-icons/fa';
import { links, social } from './Data';
import logo from './logo.svg';
import { useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" />
          <button className="nav-toggle" onClick={handleClick}>
            <FaBars />
          </button>
        </div>
        <div
          className={
            showLinks ? 'links-container show-links' : 'links-container'
          }
        >
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
