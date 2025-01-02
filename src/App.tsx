import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Design from "./components/Design/Design.tsx";
import Contact from "./components/Contact/Contact.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/amandaxi" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/amandaxi/about" element={<About />} />
          <Route path="/amandaxi/projects" element={<Projects />} />
          <Route path="/amandaxi/design" element={<Design />} />
          <Route path="/amandaxi/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
