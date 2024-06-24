import { useState } from "react";
import Home from "./components/LandingPage/Home";
import LoadParent from "./components/Loading/LoadParent";
import MenuPage from "./components/Menu/MenuPage";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-screen bg-[#111]">
      <MenuPage menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <LoadParent />
      <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}

export default App;
