import Head from 'next/head';
import Image from 'next/image';
import { NextPage, GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';

export default function Home() {


  return (
    <>
    <Head>
        
        
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="description" content="Daniela Eichner - Senior Software Engineering Manager" />
<meta name="author" content="Daniela Eichner" />

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

<title>Daniela Eichner - Senior Software Engineering Manager | New York</title>


<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />


    </Head>
    <body>
  
{/* WRAPPER ALL */}
<div className="tokyo_tm_all_wrap" data-magic-cursor="hide" data-color="black"> {/* If you want disable magic cursor add value "hide" */}  
  
  <Navigation />
  
  {/* RIGHTPART */}
  <div className="rightpart">
    <div className="rightpart_in">
    
      {/* HOME */}
      <div id="home" className="tokyo_tm_section active">
        <div className="container">
          <div className="tokyo_tm_home">
            <div className="home_content">
              <div className="avatar">
                <div className="image" data-img-url="img/danielaeichner.jpg"></div>
              </div>
              <div className="details">
                <h3 className="name">Daniela <span>Eichner</span></h3>
                <p className="job">Senior Software Engineering Manager and Founder with extensive experience in building, planning, and managing complex, high-performance, big data software applications for international companies. Experience in leading teams of up to 30 engineers, recruiting, coaching, and scaling teams.</p>
                <p className="jobEmail">
                  <a href="mailto:hello@danielaeichner.com">hello@danielaeichner.com</a>
                </p>
                <div className="social">
                  <ul>
                    <li><a href="https://github.com/DanielaKirsch">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/danielaeichner/">LinkedIn</a></li>
                    <li><a href="https://twitter.com/Daniela">Twitter</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /HOME */}
    
    </div>
  </div>
  {/* /RIGHTPART */}
  
</div>
{/* / WRAPPER ALL */}
 

</body>
    </>
  );
}
