
// import './App.css'
import { Routes, Route } from "react-router-dom";
import NewsList from "./components/NewsList";
import Home from "./pages/Home";


function App() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsList />} />
       </Routes>
    );
  }

export default App

