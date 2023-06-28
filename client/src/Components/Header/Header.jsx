// import NavBar from './Pages/Header/NavBar'
import react, { useState } from "react";
const Header = () => {
  const [burger_class, setBurgerClass] = useState(" burger-bar unclicked ");
  const [menu_class, setMenuClass] = useState(" menu hidden ");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass(" burger-bar clicked ");
      setMenuClass(" menu visible ");
    } else {
      setBurgerClass("burger-bar unclicked ");
      setMenuClass(" hidden ");
    }
  };
  return (
    <>
      <nav>
        <div className="mobileMenu" style={{ width: "100%", height: " 100vh" }}>
          <div div className=" burger-menu ">
            <div div className={burger_class} onclick={updateMenu}></div>
            <div div className={burger_class} onclick={updateMenu}>
              {" "}
            </div>
            <div className={burger_class} onClick={updateMenu}>
              {" "}
            </div>
          </div>
          <div classNome="menu_class">Fitness</div>
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
