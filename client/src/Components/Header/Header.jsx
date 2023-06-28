import React, { useState } from "react";

const Header = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <nav>
        <div className="mobileMenuDiv" style={{ width: "100%", height: "100vh" }}>
          <nav className="mobileMenu">
            <div className="burger-menu" onClick={updateMenu}>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
            </div>
            <div>
            <a href="#" className="logo" alt="Logo">
              Sant<span className="logoB">B</span>log
            </a>
          </div>
          </nav>
          <div className={menu_class}>
          <ul className="mobilenavItem">
            <li className="mobilenavlinks">
                <a href="#" alt="Signup" className="navlinks">
                  Contact US
                </a>
              </li>
              <li className="mobilenavlinks">
                <a href="#" alt="Signup" className="navlinks">
                 Lifestyle
                </a>
              </li>
              <li className="mobilenavlinks">
                <a href="#" alt="Signup" className="navlinks">
                  Shopping
                </a>
              </li>
              <li className="mobilenavlinks">
                <a href="#" alt="Signup" className="navlinks">
                 Treading News
                </a>
              </li>
              <li className="mobilenavlinks">
                <a href="#" alt="Login">
                  Login
                </a>
              </li>
              <li className="mobilenavlinks">
                <a href="#" alt="Signup" className="navlinks">
                  Sign Up
                </a>
              </li>
            </ul>
            </div>
        </div>
        <div className="headerDesk">
          <div>
            <a href="#" className="logo" alt="Logo">
              Sant<span className="logoB">B</span>log
            </a>
          </div>
          <nav>
            <ul className="navItem">
            <li className="navlinks">
                <a href="#" alt="Signup" className="navlinks">
                  Contact US
                </a>
              </li>
              <li className="navlinks">
                <a href="#" alt="Signup" className="navlinks">
                 Lifestyle
                </a>
              </li>
              <li className="navlinks">
                <a href="#" alt="Signup" className="navlinks">
                  Shopping
                </a>
              </li>
              <li className="navlinks">
                <a href="#" alt="Signup" className="navlinks">
                 Treading News
                </a>
              </li>
              <li className="navlinks">
                <a href="#" alt="Login">
                  Login
                </a>
              </li>
              <li className="navlinks">
                <a href="#" alt="Signup" className="navlinks">
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Header;
