import { BrowserRouter, Route,Routes } from "react-router-dom"
import Landing from "./Landing/Landing"
import Login from '../src/components/Login';

function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing></Landing>}></Route>
    <Route path="/Login" element={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
  )

}
export default App