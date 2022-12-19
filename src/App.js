import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home-page/home-page";
import AddItem from "./components/add-item/add-item";
import ResourcesPage from "./components/resources-page/resources-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/resource-items" element={<ResourcesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
