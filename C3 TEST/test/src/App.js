import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/pages/Navbar";
import { SingleBook } from "./Components/pages/SingleBook";
import { Home } from "./Components/pages/Home";

import Mainroutes from "./Components/Routes/MainRoutes";
import { About } from "./Components/pages/About";
import { Login } from "./Components/pages/Login";
import  Books  from "./Components/pages/Books";
import { BookCard } from "./Components/pages/BookCard";


function App() {
  return (
    <div className="App">
      <Navbar />
    {/* <Mainroutes/> */}
    {/* <SingleBook /> */}

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/books" element={<Books />}/>
      <Route path="/books/:xyz" element={<BookCard />}/>
      <Route path="/login" element={<Login />} /> 
    </Routes>
    </div>
  );
}
export default App;
