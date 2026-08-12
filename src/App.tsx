import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { SmoothScroll } from "./components/layout/SmoothScroll";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
