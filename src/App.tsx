import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import Courses from "./components/Courses/Courses";
import Advantages from "./components/Advantages/Advantages";
import Statistics from "./components/Statistics/Statistics";
import Teachers from "./components/Teachers/Teachers";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/Reviews/Reviews";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Loader from "./components/Loader/Loader";

const App = () => {

  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
     const timer = setTimeout(() => {
      setLoading(false);
     }, 1500)
     return () => clearTimeout(timer);
  }, [])

  if(loading) {
    return <Loader/>
  }

  return (
    <>
     <Header/>
     <Hero/>
     <Courses/>
     <Advantages/>
     <Statistics/>
     <Teachers/>
     <Reviews/>
     <Faq/>
     <Contact/>
     <Footer/>
     <ScrollToTop/>
    </>
  )
}

export default App;