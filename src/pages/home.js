import React, { useEffect, useState } from 'react';
// import './App.css';
// import axios from 'axios'
// import Coin from '../Coin';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import Roadmap from '../components/roadmap';
import Header from '../components/header';
import WhyChooseUs from '../components/why-zeroloss';
import ZerolossBinance from '../components/zeroloss-binance';
import InfoChart from '../components/infoChart';


function Home() {

  return <>
       <body className="theme-royal-blue" data-spy="scroll" data-target="#navbar-nav" data-animation="true"
      data-appearance="light">


<main className="main">



    {/* <section className="space h-min-100vh d-flex align-items-center" style={{backgroundColor: "black"}}>
        <div className="svg-shape--top w-100"> */}
            
        {/* </div> */}
      <NavBar />
      <Header />
      <WhyChooseUs />
      <InfoChart />
      <ZerolossBinance />
      <Roadmap />
      <Footer />
{/* </section> */}
    </main>
    </body>
    </>
  }

export default Home;