export const Header = () => (
  <header className="header">
    <div className="header__content container">
      <a href="#1" className="header__logo">CHAT</a>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#1" className="nav__link nav__link--active">Chat</a>
          </li>
          <li className="nav__item">
            <a href="#1" className="nav__link">Profile</a>
          </li>
          <li className="nav__item">
            <a href="#1" className="nav__link">Settings</a>
          </li>
          <li className="nav__item">
            <a href="#1" className="nav__link">Admin Panel</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
