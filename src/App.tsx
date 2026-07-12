import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Design from "./components/Design/Design.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Writings from "./components/Writings/Writings.tsx";
import WritingPost from "./components/Writings/WritingPost.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/design" element={<Design />} />
          <Route path="/writings" element={<Writings />} />
          <Route path="/writings/:slug" element={<WritingPost />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
