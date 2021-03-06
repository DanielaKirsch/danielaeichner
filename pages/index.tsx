import React from "react";


const myfeatures = [
  { name: 'danielaeichner', stat: 'LinkedIn', link:'https://www.linkedin.com/in/danielaeichner' },
  { name: '@daniela', stat: 'Twitter', link:'https://twitter.com/daniela' },
  { name: 'danielakirsch', stat: 'Github', link:'https://github.com/danielakirsch' },
  
  
  { name: 'dan1ela.eth', stat: 'OpenSea', link:'https://opensea.io/dan1ela.eth' },
  { name: 'daniela@nameface.com', stat: 'Email', link:'mailto:daniela@nameface.com' },
  
]



export default function Index() {


  return (
    <>
     <div className="relative bg-darkblue-600">
    

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline text-white">Daniela Eichner</span>{' '}
              <span className="block text-magic-600 xl:inline">Software Engineer & Founder</span>
           
            </h1>
            <p className="mt-3 max-w-md mx-auto text-2xl text-gray-400 md:mt-5 md:max-w-3xl">

              <ul>
                <li>Lifelong Gamer</li>
                <li>Engineer since 1999</li>
                <li>Founder since 2007</li>
                <li>Crypto since 2018</li>
              </ul>
            </p>
           
            
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
         
        </div>

      </main>

    </div>

    <div className="relative max-w-5xl mx-auto">
      <h2 className="text-4xl text-white text-center mt-20 mb-20">
      Hey there! I&apos;m a very passionate software engineer and founder of multiple companies. I love creating, building and developing projects from the ground up.
      </h2>
    </div>
    <div className="my-20 flex justify-center">

      <dl className="mt-5 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {myfeatures.map((item) => (
            <a key={item.stat} href={item.link} className="hover:text-gray-500 hover:bg-gray-600" target="_new">
              <div className="px-10 py-8 border border-4 rounded-lg overflow-hidden">
                
                  <dd className="flex text-2xl text-white justify-center content-center">{item.stat}</dd>
                  <span className="flex text-lg text-white justify-center content-center">{item.name}</span>
                
              </div>
              </a>
          ))}
      </dl>
    </div>


  <div className="relative max-w-5xl mx-auto">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          
          <img
            className="h-62 w-full object-cover lg:absolute lg:h-full"
            src="/img/magicwizardtech_de.png"
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-magic-600 sm:text-4xl">
              Magic Wizard Tech Inc.
            </h2>
            <p className="mt-8 text-2xl text-white">
            I started my newest venture Magic Wizard Tech in 2022 to build tools for the blockchain. </p>
           
          </div>
        </div>
      </div>
    </div>


    </>

  );
}

