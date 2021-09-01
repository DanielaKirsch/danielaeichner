
import Image from 'next/image';
import { NextPage, GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';

export default function Home() {


  return (
    <>
    <body>
  
{/* WRAPPER ALL */}
<div className="tokyo_tm_all_wrap"> {/* If you want disable magic cursor add value "hide" */}  
  
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
