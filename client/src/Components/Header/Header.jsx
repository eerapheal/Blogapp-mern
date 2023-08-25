import React, { useState, useEffect, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../UserContext';
import './Header.css'
const Header = () => {
   const { setUserInfo, userInfo } = useContext(UserContext);
   const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((userData) => {
        updateUserInfo(userData);
      })
      .catch((error) => {
        console.error("Error retrieving user profile:", error);
      });
  }, []);

  const updateUserInfo = (userData) => {
    setUserInfo(userData);
  };

    function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: 'POST',
    });
    setUserInfo(null);
      navigate("/"); // Redirect to the login page
    
  }

  const email = userInfo?.email;

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
              <Link to='/treadingnews' alt="treandingNews">
              <div alt="treadingNews ">
                Treading News <i className="fas fa-caret-down"></i>
              </div>
              </Link>
              <div className="dropdownMenu">
                <ul>
                  <li>
                    <Link to="/" alt="Global news">
                      General News
                    </Link>
                  </li>
                  <li>
                    <div alt="Sport" className="sport">
                    <span>  Sport</span> <i className="fas fa-caret-right"></i>
                    </div>
                    <div className="dropdownMenu1">
                      <ul>
                        <li>
                          <Link to="/" alt="Football">
                            Football
                          </Link>
                        </li>
                        <li>
                          <Link to="/" alt="UFC/MMA">
                            UFC/MMA
                          </Link>
                        </li>
                        <li>
                          <Link to="/" alt="Rugby">
                            Rugby
                          </Link>
                        </li>
                        <li>
                          <Link to="/" alt="Cricket">
                            Cricket
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/" alt="Entern">
                      Enterntement
                    </Link>
                  </li>
                  <li>
                    <Link to="/" alt="Discovery">
                      Discovery
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <nav className=" mobilenavlinksactive">
              {email ? (
                <>
                  <Link to="/createPost"  className=" mobilenavlinks">Make Post</Link>
                  
                  <a className="mobilenavlinks" onClick={logout}>Logout</a>
                </>
              ) : (
                <>
                  <Link to="/login" alt="Login" className=" mobilenavlinks">
                    Login
                  </Link>
                  <Link to="/signup" alt="Signup" className="mobilenavlinks">
                    Sign Up
                  </Link>
                </>
              )}
            </nav>
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
              <Link to='/treadingnews' alt="treandingNews">
              <div className="navlinks">
                Treading News <i className="fas fa-caret-down"></i>
              </div>
              </Link>
              <div className="dropdownMenu">
                <ul>
                  <li>
                    <Link to="/" alt="Global news">
                      Global news
                    </Link>
                  </li>
                  <li>
                    <div alt="Sport">
                      Sport <i className="fas fa-caret-right"></i>
                    </div>
                    <div className="dropdownMenu1">
                      <ul>
                        <li>
                          <Link to="/" alt="Football">
                            Football
                          </Link>
                        </li>
                        <li>
                          <Link to="/" alt="UFC/MMA">
                            UFC/MMA
                          </Link>
                        </li>
                        <li>
                          <Link to="/" alt="Rugby">
                            Rugby
                          </Link>
                        </li>
                        <li>
                          <Link to="/" alt="Cricket">
                            Cricket
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/" alt="Entern">
                      Enterntement
                    </Link>
                  </li>
                  <li>
                    <Link to="/" alt="Discovery">
                      Discovery
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
              <li className="navlinks navlinksactive">
              {email ? (
                <>
                  <Link to="/createPost">Make Post</Link>
                  
                  <a className="navlinks" onClick={logout}>Logout</a>
                </>
              ) : (
                <>
                  <Link to="/login" alt="Login">
                    Login
                  </Link>
                  <Link to="/signup" alt="Signup" className="navlinks">
                    Sign Up
                  </Link>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Header;
