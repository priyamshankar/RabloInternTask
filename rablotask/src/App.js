import "./App.css";
import Navbar from "./components.jsx/Navbar";
import Personalinfo from "./components.jsx/Personalinfo";
import Progressbar from "./components.jsx/Progressbar";
import Waves from "./components.jsx/Waves";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const store = useSelector((state) => state.add);
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/personalinfo" element={<Personalinfo />}></Route>
        </Routes>
      </BrowserRouter>
      <Progressbar status={store} />
      <Waves />
    </div>
  );
}

export default App;
