import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home/Home"
import {Register} from "./pages/Register/Register"

export function AppRoutes() {
  return(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
  ) 
}
