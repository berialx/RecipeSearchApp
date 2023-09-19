import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h2>Hello</h2>
      <Home />
    </BrowserRouter>
  );
}

export default App;