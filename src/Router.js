import { BrowserRouter,Link, Route, Routes } from "react-router-dom";
import Quiz from "./Home";
import Login from "./login";
import SignUp from "./Signup";

const RouterApp =()=>{
    return(
        <BrowserRouter>
        <nav>
            {/* <ul>
                <li><Link to="Login">login</Link>{""}</li>
                <li><Link to="Signin">Signin</Link>{""}</li>
                <li><Link to="Home">Home</Link>{""}</li>
            </ul> */}
        {/* <Login/> */}
        </nav>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="SignUp" element={<SignUp/>}></Route>
            <Route path="Home" element={<Quiz/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default RouterApp;