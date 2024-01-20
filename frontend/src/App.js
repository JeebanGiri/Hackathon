import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Challenge from "./Components/Challenges/Challenges"
import Blog from "./Components/Blog/Blog";
import ViewBlog from "./Components/Blog/ViewBlog";
import ChoosingPage from "./Components/ChoosingPage/ChoosingPage";
import Login from "./Components/Authentication/Login/Login";
import Signup from "./Components/Authentication/Signup/Signup";
import Footer from "./Components/Footer/Footer";


function App() {

  let navigate = useLocation();

  const isAuthenticationPage = () => {
    const pages = ['/Login','/Signup','Account'];
    return pages.includes(window.location.pathname);
  };

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/Challenges" Component={Challenge}/>
        <Route path="/Blog" Component={Blog}/>
        <Route path="/ViewBlog" Component={ViewBlog}/>
        <Route path="/ChoosingPage" Component={ChoosingPage}/>
        <Route path="/Login" Component={Login}/>
        <Route path="/Signup" Component={Signup}/>
      </Routes>
      {!isAuthenticationPage() && <Footer />}
    </div>
  );
}

export default App;
