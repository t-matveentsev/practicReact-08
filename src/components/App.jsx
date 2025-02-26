import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Todos from "../pages/Todos/Todos";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="todos" element={<Todos />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default App;
