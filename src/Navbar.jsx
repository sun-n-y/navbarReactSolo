import { FaBars } from 'react-icons/fa';
import { links, social } from './Data';
import logo from './logo.svg';
import { useRef, useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const linksStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

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
          className="links-container"
          ref={linksContainerRef}
          style={linksStyle}
        >
          <ul className="links" ref={linksRef}>
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
        <div className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <a href={url} key={id}>
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
