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

      <nav>
        <div className="mobileMenuDiv" style={{ width: "100%" }}>
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
                  Technology
                </a>
              </li>
              <li className="mobilenavlinks">
                <a href="#" alt="Signup" className="navlinks">
                 Lifestyle
                </a>
              </li>
              <li className="mobilenavlinks">
                <a href="#" alt="Signup" className="navlinks">
                  Health
                </a>
              </li>
              <li className="mobilenavlinks">
                <a href="#" alt="Signup">
                 Treading News
                 <i class="fas fa-caret-down"></i>
                </a>
                <div className="dropdownMenu">
                  <ul>
                    <li>
                      <a href="" alt="Global news">Global news</a>
                      </li>
                    <li>
                      <a href="" alt="Sport">
                        Sport
                        <i class="fas fa-caret-right"></i>
                        <div className="dropdownMenu1">
                  <ul>
                    <li>
                      <a href="" alt="Global news">Football</a>
                      </li>
                    <li>
                      <a href="" alt="UFC/MMA">
                        UFC/MMA
                        </a>
                      </li>
                    <li>
                      <a href="" alt="Rugby">Rugby</a>
                      </li>
                    <li>
                      <a href="" alt="Cricket">Cricket</a>
                      </li>
                  </ul>
                </div>
                        </a>
                      </li>
                    <li>
                      <a href="" alt="Entern">Enterntement</a>
                      </li>
                    <li>
                      <a href="" alt="Discovery">Discovery</a>
                      </li>
                  </ul>
                </div>
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
                  Technology
                </a>
              </li>
              <li className="navlinks">
                <a href="#" alt="Signup" className="navlinks">
                 Lifestyle
                </a>
              </li>
              <li className="navlinks">
                <a href="#" alt="Signup" className="navlinks">
                  Health
                </a>
              </li>
              <li className="navlinks">
                <a href="#" alt="Signup" className="navlinks1">
                 Treading News
                 <i class="fas fa-caret-down"></i>
                </a>
                <div className="dropdownMenu">
                  <ul>
                    <li>
                      <a href="" alt="Global news">Global news</a>
                      </li>
                    <li>
                      <a href="" alt="Sport">
                        Sport
                        <i class="fas fa-caret-right"></i>
                        <div className="dropdownMenu1">
                  <ul>
                    <li>
                      <a href="" alt="Global news">Football</a>
                      </li>
                    <li>
                      <a href="" alt="UFC/MMA">
                        UFC/MMA
                        </a>
                      </li>
                    <li>
                      <a href="" alt="Rugby">Rugby</a>
                      </li>
                    <li>
                      <a href="" alt="Cricket">Cricket</a>
                      </li>
                  </ul>
                </div>
                        </a>
                      </li>
                    <li>
                      <a href="" alt="Entern">Enterntement</a>
                      </li>
                    <li>
                      <a href="" alt="Discovery">Discovery</a>
                      </li>
                  </ul>
                </div>
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

  );
};

export default Header;
