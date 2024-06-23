import Home from "./components/LandingPage/Home";
import LoadParent from "./components/Loading/LoadParent";

function App() {
  return (
    <div className="h-screen bg-[#111]">
      <LoadParent />
      <Home />
    </div>
  );
}

export default App;
