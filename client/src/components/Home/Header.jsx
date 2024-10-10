const Header = ({ setIsModelOpen }) => {
  return (
    <div className="header">
      <div className="logoContainer">
        <div className="logo">
          <img src="../../logo.png" alt="logo" />
          <p className="logoName">shareNote</p>
        </div>
        <div className="btn">
          <button onClick={() => setIsModelOpen(true)}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
