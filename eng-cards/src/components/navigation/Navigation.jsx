// import React from 'react';
// import styles from './Navigation.module.css';
// import LoginForm from './loginform/LoginForm';
// import RegisterForm from './registerform/RegisterForm';
// import Logo from './logo/Logo';
// import NewWord from '../newword/NewWord';


// const Navigation = () => {
//   return (
    
//       <nav className={styles.navigationFixed}>
//         <div className={styles.navigation}>
//         <Logo/>
//         <h1 className={styles.AppName}>Vocabulary</h1>
//         <ul className={styles.NavBar}>
//           <li><LoginForm /></li>
//           <li></li>
//         </ul>
//         </div>
//       </nav>
//   );
// };

// export default Navigation;

import React from "react";
import {Link} from "react-router-dom";
import Logo from "./logo/Logo";
import "./Navigation.css";


function Navigation() {
  return(
    <div className="navigationFixed">
      <div className="navigation">
      <Link to="/"><Logo/></Link>
      <h1 className="AppName">Vocabulary</h1>
      <div className="navBarMenu">
      <Link to="/newword"> Новое слово </Link>
      <Link to="/main"> Играть в карточки </Link>
      </div>
      <ul className="NavForms">
        <li><Link to="/loginform"> Войти </Link></li>
        <li><Link to="/registerform">Зарегистироваться</Link></li>
      </ul>
      
      </div>
    </div>
  );
};

export default Navigation;