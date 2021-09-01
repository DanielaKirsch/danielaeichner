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
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="description" content="Name of your web site" />
<meta name="author" content="Marketify" />

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

<title>Tokyo | Home</title>



<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />


    </Head>
    <body>
  
{/* WRAPPER ALL */}
<div className="tokyo_tm_all_wrap" data-magic-cursor="hide" data-color="black"> {/* If you want disable magic cursor add value "hide" */}  

  
  <Navigation />

  
  
  {/* RIGHTPART */}
  <div className="rightpart">
    <div className="rightpart_in">

      {/* ABOUT */}
      <div id="about" className="tokyo_tm_section active">
        <div className="container">
          <div className="tokyo_tm_about">
            
            <div className="description">
              <h1 className="name">Daniela Eichner</h1>
              <div className="description_inner">
                <div className="left">
                  <p>Software Engineer, Engineering Manager, and Founder with extensive experience in building, planning, and managing complex, high-performance, big data software applications for international companies.</p> 
                  <p>Experience in leading teams of up to 30 engineers, recruiting, coaching, and scaling teams.</p>
                </div>
                <div className="right">
                  <ul>
                    <li><p><span>Email:</span><a href="mailto:hello@danielaeichner.com">hello@danielaeichner.com</a></p></li>
                    <li><p><span>Home:</span>Long Beach, New York, USA</p></li>
                    <li><p><span>Github:</span><a href="https://github.com/DanielaKirsch">@DanielaKirsch</a></p></li>
                    <li><p><span>LinkedIn:</span><a href="https://www.linkedin.com/in/danielaeichner/">DanielaEichner</a></p></li>
                  </ul>
                  <div class="tokyo_tm_button">
                    <a href="#">Download Resume</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="description">
              <h2 className="name">Experience</h2>
                <div className="resume">
                  <h3>Tech Lead, People Manager, and Senior Software Engineer</h3>
                  <h4>Patch.com, New York | 05/2018 – Current</h4>
                  <ul>
                    <li>Tech Lead on the number one company roadmap item every quarter</li>
                    <li>Core backend services owner and primary contact for engineers on the main tech stack</li>
                    <li>Project and sprint planning, estimating deliverables, and leading software engineering teams</li>
                    <li>Code and architecture design reviews</li>
                    <li>Status reports to the executive team</li>
                    <li>People Manager for two engineers: 1:1 and feedback meetings, tech and career coaching</li>
                    <li>Recruiting, conducting engineering interviews, and making hiring decisions</li>
                    <li>Backend software engineering with NodeJS, PHP and AWS</li>
                    <li>Migrations from a legacy Drupal system to a microservices architecture on AWS</li>
                    <li>Migrations from MySQL to AWS DynamoDB</li>
                    <li>Create and integrate various internal and external frameworks and APIs</li>
                  </ul>
                </div>

                <div className="resume">
                  <h3>Founder, CEO, and Tech Lead</h3>
                  <h4>NameFace, New York | 11/2015 – 05/2018</h4>
                  <ul>
                    <li>Develop a facial recognition solution for news and event photographers to name the personalities in their photos.</li>
                    <li>Building the tech and launching in less than three months</li>
                    <li>Hiring a team of four content maintainers, customer service, and sales reps</li>
                    <li>Pitching investors</li>
                    <li>Customer acquisition and onboarding of photographers</li>
                  </ul>
                </div>

                <div className="resume">
                  <h3>Founder, CEO, and Tech Lead</h3>
                  <h4>HelloPlugin Web Development Services, Berlin, Germany | 09/2007 – 11/2015</h4>
                  <ul>
                    <li>Full-service web development projects and technical consulting for Mercedes Benz, Adidas, Electronic Arts, MTV, Telekom, BBDO, Axel Springer, Bayer, and many more</li>
                    <li>Profitable from year one</li>
                    <li>Recruiting of eight full-time senior and junior engineers</li>
                    <li>1:1 meetings and coaching of the engineers, including code reviews and career planning</li>
                    <li>Project and budget planning</li>
                    <li>Business development and customer acquisition</li>
                  </ul>
                </div>

                <div className="resume">
                  <h3>Director of Project Management</h3>
                  <h4>GameDuell Online Gaming, Berlin, Germany | 12/2005 – 08/2007</h4>
                  <ul>
                    <li>Leading up to 30 full-time employees (engineers, project managers, and QA)</li>
                    <li>Reported directly to the CEO</li>
                    <li>Deploy strategies to scale the team from 10 to over 30</li>
                    <li>Sourcing an external team in Pattaya, Thailand. Contract negotiations and onboarding</li>
                    <li>Coaching two senior employees for their new leadership role as team leaders</li>
                    <li>Promoting the public image of GameDuell through presentations and lectures at universities in Germany</li>
                  </ul>
                </div>

                <div className="resume">
                  <h3>Technical Product Manager</h3>
                  <h4>GFKL Financial Services, Essen, Germany | 2003/04 – 11/2005</h4>
                  <ul>
                   <li>Technical product management for several financial projects</li>
                    <li>Managing software engineering teams in Lithuania and Armenia</li>

                  </ul>
                </div>

                <div className="resume">
                  <h3>Senior Software Engineer</h3>
                  <h4>Freelance, Europe | 03/2001 – 03/2003</h4>
                  <ul>
                   <li>Software development for multiple projects around Europe</li>
                  </ul>
                </div>

                <div className="resume">
                  <h3>Project Manager and Web Developer</h3>
                  <h4>Pixelpark AG, Berlin, Germany | 06/1999 – 03/2001</h4>
                  <ul>
                   <li>Developed the very first Adidas e-commerce shop in Europe</li>
                    <li>Developed an e-commerce shop for Conrad, a leading electronics store in Europe</li>
                  </ul>
                </div>

            </div>


          </div>
        </div>  
      </div>
      {/* /ABOUT */}

     
    
    </div>
  </div>
  {/* /RIGHTPART */}
 
</div>
{/* / WRAPPER ALL */}
 

</body>
    </>
  );
}
