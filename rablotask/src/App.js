import "./App.css";
import Navbar from "./components.jsx/Navbar";
import Personalinfo from "./components.jsx/Personalinfo";
import Progressbar from "./components.jsx/Progressbar";
import Waves from "./components.jsx/Waves";

function App() {
  return (
    <div>
      <Navbar />
      <Personalinfo />
      <Progressbar status='50'/>
      <Waves />
    </div>
  );
}

export default App;
