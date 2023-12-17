import React, { useEffect } from 'react'
import Navbar from "../Components/Navbar"
import Carousal from '../Components/Carousal'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import Features from '../Components/Features'
import Cta from '../Components/Cta'
import CarousalCards from '../Components/CarousalCards'
import Facultycards from '../Components/Faculty-cards'
import Faq from '../Components/Faq'
import { useRef } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import AchievementCarousal from '../Components/AchievementCarousal'
import Placements from '../Components/Placements'

const Home = () => {

    const scrollRef = useRef(null);

   

    useEffect(()=>{
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth:true, 
        });

        return()=>{
            scroll.destroy();
        }
    },[])
  return (
    <>
      <div ref={scrollRef} className='data-scroll-container data-scroll data-scroll-offset h-[970vh] '>
        <Navbar />
        <Carousal />
        <Cards/>
        <Facultycards/>
        <Features/>
        <CarousalCards/>
        <Cta/>
        <Placements/>
        <AchievementCarousal/>
        <Faq/>
        <Footer/>
      </div>
    </>
  );
}

export default Home