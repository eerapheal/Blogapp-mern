import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from 'react'

const Header = () => {
useEffect(() => {
fetch('http://localhost:4000/profile', {
  credentials: "include",
}).then(response => {
    response.json().then(usersInfo => {

    });
})
},[])

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
            <Link to="/" className="logo" alt="Logo">
              Sant<span className="logoB">B</span>log
            </Link>
          </div>
          </nav>
          <div className={menu_class}>
          <ul className="mobilenavItem">
            <li className="mobilenavlinks">
                <Link to="/technology" alt="Technology" className="navlinks">
                  Technology
                </Link>
              </li>
              <li className="mobilenavlinks">
                <Link to="/lifestyle" alt="Lifestyle" className="navlinks">
                 Lifestyle
                </Link>
              </li>
              <li className="mobilenavlinks">
                <Link to="/health" alt="Health" className="navlinks">
                  Health
                </Link>
              </li>
              <li className="mobilenavlinks">
                <Link to="/treadingnews" alt="treadingNews">
                 Treading News
                 <i class="fas fa-caret-down"></i>
                </Link>
                <div className="dropdownMenu">
                  <ul>
                    <li>
                      <a href="" alt="Global news">General News</a>
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
                <Link to="/login" alt="Login">
                  Login
                </Link>
              </li>
              <li className="mobilenavlinks">
                <Link to="/signup" alt="Signup" className="navlinks">
                  Sign Up
                </Link>
              </li>
            </ul>
            </div>
        </div>
        <div className="headerDesk">
          <div>
            <Link to="/" className="logo" alt="Logo">
              Sant<span className="logoB">B</span>log
            </Link>
          </div>
          <nav>
            <ul className="navItem">
            <li className="navlinks">
                <Link to="/Technology" alt=" Technology" className="navlinks">
                  Technology
                </Link>
              </li>
              <li className="navlinks">
                <Link to="/lifestyle" alt="Lifestyle" className="navlinks">
                 Lifestyle
                </Link>
              </li>
              <li className="navlinks">
                <Link to="/health" alt="Health" className="navlinks">
                  Health
                </Link>
              </li>
              <li className="navlinks">
                <Link to="/treandingNews" alt="treandingNews" className="navlinks1">
                 Treading News
                 <i class="fas fa-caret-down"></i>
                </Link>
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
                <Link to="/login" alt="Login">
                  Login
                </Link>
              </li>
              <li className="navlinks">
                <Link to="/signup" alt="Signup" className="navlinks">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>

  );
};

export default Header;
