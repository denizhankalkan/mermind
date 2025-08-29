import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBarr";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import Services from "./pages/services";
import Company from "./pages/company"
import Ideas from "./pages/ideas";
import Contact from "./pages/contact";

export default function App(){
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
         
          </>
        }/>
        <Route path="/services" element={<Services />} />
        <Route path="/company" element={<Company />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
