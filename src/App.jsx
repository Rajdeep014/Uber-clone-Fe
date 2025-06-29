import { BrowserRouter, Route, Routes } from "React-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Presentation/Home";
import CaptainLogin from "./pages/Auth/CaptainLogin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
