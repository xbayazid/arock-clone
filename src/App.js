import Home from "./components/LandingPage/Home";
import LoadParent from "./components/Loading/LoadParent";
import MenuPage from "./components/Menu/MenuPage";

function App() {
  return (
    <div className="h-screen bg-[#111]">
      <MenuPage/>
      <LoadParent />
      <Home />
    </div>
  );
}

export default App;
