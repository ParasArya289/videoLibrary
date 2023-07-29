import { Route, Routes } from "react-router";
import "./App.css";
import { Category } from "./Pages/Category/Category";
import { Home } from "./Pages/Home/Home";
import { Video } from "./Pages/Video/Video";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/video/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
