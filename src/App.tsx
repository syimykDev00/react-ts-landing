import React from "react";
import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import Courses from "./components/Courses/Courses";
import Advantages from "./components/Advantages/Advantages";
import Statistics from "./components/Statistics/Statistics";
import Teachers from "./components/Teachers/Teachers";
import Testimonials from "./components/Testimonials/Testimonials";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
     <Header/>
     <Hero/>
     <Courses/>
     <Advantages/>
     <Statistics/>
     <Teachers/>
     <Testimonials/>
     <Faq/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App;