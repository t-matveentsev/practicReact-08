import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/selectors";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <header>
      <h2>Auth</h2>
      {user.name && <h3>Welcome, {user.email}</h3>}
      <nav className={s.nav}>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="/todos"
        >
          Todos
        </NavLink>

        {!isLoggedIn && (
          <>
            <NavLink
              className={({ isActive }) => clsx(s.link, isActive && s.active)}
              to="/register"
            >
              Register
            </NavLink>
            <NavLink
              className={({ isActive }) => clsx(s.link, isActive && s.active)}
              to="/login"
            >
              Login
            </NavLink>
          </>
        )}
        {isLoggedIn && <button className={s.logoutBtn}>Logout</button>}
      </nav>
    </header>
  );
};
export default Header;
