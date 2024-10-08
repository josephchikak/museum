// 'use client'

// import { motion } from "framer-motion"
import * as motion from "framer-motion/client"
import Link from "next/link"
// import { useState } from "react"
import Image from "next/image"
import Images from './Images'
import Search from './Search'
import { animate } from "framer-motion"


const LandingPage = () => {


  const anim  ={
    initial: {
    y: -100
    },
    animate: {
      y: 100
    },
  }

  
  return (
    <>
      
        <div className='w-[100%] h-[95vh] relative border-[1px] border-black flex flex-col lg:flex-row'>
       
            <div className="lg:w-[50vw] w-[100%] h-[100%] relative  font-inter text-wrap break-words p-[2rem] flex flex-col  text-[3rem] md:text-[4rem] lg:text-[5.5rem] bg-no-repeat bg-landing bg-opacity-50 bg-center z-0">
                    {/* <Image
                      alt="national museum"
                      src='/assets/National-Museum.webp'
                      // placeholder="blur"
                      quality={100}
                      fill
                      // sizes="10vw"
                      style={{
                        objectPosition: 'center',
                        objectFit:'contain',
                        display: 'block'
                      }}
                    /> */}

              <motion.div 
                  // initial={{opacity: 0}}
                  // animate={{opacity:1}}
                  // transition={{duration:0.3}}
                  className="w-[100%]">

                  <h1 className="tracking-wide font-extrabold relative sm:overflow-hidden  z-2"> 
                      <motion.div
                          // variants={anim} 
                          initial={{y:100}}
                          whileInView={{y:0}}
                          viewport={{once: true}}
                          transition={{duration: 0.8, delay:0.2, ease: "easeOut"}}
                          className="absolutue z-2"> NATIONAL</motion.div> </h1>

                  <h1 className="tracking-wide font-extrabold relative sm:overflow-hidden z-2"> 
                      <motion.div
                                initial={{y:100}}
                                whileInView={{y:0}}
                                viewport={{once: true}}
                                transition={{duration: 0.8, delay:0.5, ease: "easeOut"}}
                          className="absolutue z-2">MUSEUM</motion.div> </h1>

                  <h1 className="tracking-wide font-extrabold relative sm:overflow-hidden z-2"> 
                      <motion.div
                          initial={{y:100}}
                          whileInView={{y:0}}
                          viewport={{once: true}}
                          transition={{duration: 0.8, delay:0.7, ease: "easeOut"}}   
                          className="absolutue z-2">LAGOS</motion.div> </h1>

                  <h2 className="font-inter tracking-wide font-extrabold relative sm:overflow-hidden z-2"> 
                      <motion.div
                          initial={{y:100}}
                          animate={{y:0}}
                          viewport={{once: true}}
                          transition={{duration: 0.8, delay:1, ease: "easeOut"}}   
                          className="absolutue z-2">ARCHIVES</motion.div> 
                    </h2>

                  {/* <br /> MUSEUM  <br /> LAGOS  */}
                  {/* <h2 className="text-[1rem] sm:text-[3rem]"> </h2> */}

              </motion.div>

         
        
            </div>
     
          <div className='relative flex border-black text-[0.7rem] md:text-[1rem] h-[100%] lg:w-[50vw] '>
       
            
          <Link href='/manuscripts' className="">

              <div className='manuscripts   p-[1.5rem] bg-background border-[0.5px] relative border-black w-[100%] h-[100%] flex flex-col gap-6 '>
                  <Link href='/manuscripts' className="">
                              <motion.div
                          whileHover={{
                                        scaleX: 1.5,
                                        x: -8
                          }}
                            className="absolute invisible lg:visible -z-5 -top-8 left-1/4 lg:top-1/2 lg:-left-8 bg-primary w-[3rem] h-[2rem] lg:w-[2rem] lg:h-[6rem] rounded-t-md lg:rounded-r-none lg:rounded-l-md"/>              
                      </Link>
                      <div   className="bg-k.c h-1/2 bg-fit bg-cover bg-center w-auto"/>
                  {/* <Image width={400} height={400} className=" " src="/assets/Africa Art Ema Studios.jpg" alt="" /> */}
                    <h2 className=" font-bold  ">
                      <br />
                      MANUSCRIPTS
                    </h2>
        
                  <p className=" font-light  font-old text-[0.75rem] md:text-[16px]">
                      This is a brief description of what is in the file
                   </p>

                   <div> 
                        <motion.svg
                             whileHover={{scale: 1.4,
                              rotate:'45deg'}}
                          transition={{ease: 'easeInOut', duration: 0.5}}
                          className="absolute right-4 bottom-4" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1D1911"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></motion.svg>

                    </div>

              </div>
         </Link>



         <Link href='/intelligence_reports'>
              <div className='intelligent relative  p-[1.5rem] bg-background border-[0.5px] border-black  w-[100%] h-[100%]  flex flex-col gap-6 '>
                <Link href='/intelligence_reports'>
                    <motion.div 
                        whileHover={{
                            scaleX: 1.5,
                            x: -8
                        }}
                      className="absolute invisible lg:visible -z-5 -top-8 left-1/4 lg:top-1/2 lg:-left-8 bg-primary w-[3rem] h-[2rem] lg:w-[2rem] lg:h-[6rem] lg:rounded-l-md  lg:rounded-r-none  rounded-t-md "/> 
                  </Link>
                      <div className="bg-intelligence h-1/2 bg-fit bg-cover bg-center w-auto"/>
                        
              {/* <Image width={20} height={50}  className="h-[50%] bg-slate-200" src="" alt="" /> */}
                    <h2 className="font-bold">
                      INTELLIGENCE<br />
                      REPORTS
                    </h2>
        
                  <p className=" font-light font-old text-[0.75rem] md:text-[16px]">
                      This is a brief description of what is in the file
                   </p>
                   <div > 
                        <motion.svg
                             whileHover={{scale: 1.4,
                              rotate:'45deg'}}
                          transition={{ease: 'easeInOut', duration: 0.5}}
                          className="absolute right-4 bottom-4" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1D1911"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></motion.svg>

                    </div>
                
               </div>
           </Link>


           <Link href='/maps'>
          
              <div className='maps relative p-[1.5rem] bg-background border-[0.5px] border-black  w-[100%] h-[100%] flex flex-col gap-6'>
                  <Link href='/maps'>
                      <motion.div
                        whileHover={{
                          scaleX: 1.5,
                          x: -8
                        }}
                      className="absolute invisible lg:visible -z-5 -top-8 left-1/4 lg:top-1/2 lg:-left-8 bg-primary w-[3rem] h-[2rem] lg:w-[2rem] lg:h-[6rem] rounded-t-md  lg:rounded-r-none  lg:rounded-l-md"/>
                  </Link>
                      <div className="bg-maps h-1/2 bg-cover bg-center w-auto"/>

               {/* <Image width={20} height={50} className="h-[50%] bg-slate-200" src="" alt="" /> */}
                    <h2 className="font-bold">
                    MAPS
                    </h2>
        
                  <p className=" font-light font-old text-[0.75rem] md:text-[16px]">
                      This is a brief description of what is in the file
                   </p>

                   <div > 
                        <motion.svg
                             whileHover={{scale: 1.4,
                              rotate:'45deg'}}
                          transition={{ease: 'easeInOut', duration: 0.5}}
                          className="absolute right-4 bottom-4" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1D1911"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></motion.svg>

                    </div>
                
              </div>
          </Link>

          </div>
         </div>



       {/* about */}
        <div id="museum" className="h-fit w-[100vw] bg-background p-[1.5rem] text-[0.75rem] sm:text-[1rem] flex sm:flex-row flex-col pt-10 pb-10 gap-4 border-b-black border-b-[1px]">

              <div className="h-[100%]  sm:w-1/2 flex flex-col gap-6 font-light w-full border-r-[1px] border-black p-2">

                 <h2 className="font-inter font-bold sm:text-[5rem]"> THE MUSEUM </h2>

                  <p className="w-fit font-old text-[0.75rem] sm:text-[16px]">
                  NATIONAL MUSEUM ONIKAN, LAGOS NIGERIA <br />
                  <br />
                  Formally referred to as Federal Department of Antiquities
                  These include National Museum Onikan, Lagos which was opened to the general public in the year 1957
                  Established at part of King George V. Memorial Park, situated beside the racecourse, the most attractive corner of Lagos Island.
                  The museum structure is simple style built around grass covered quadrangle.
                  The building carries a symbolic figure by the Nigerian sculptor, Ben Enwowu.  The figure, Anyanwu is of a young girl meant to be symbolic of the arising of Nigeria into the modern world
                  </p>
                  <p className="w-fit text-[0.75rem]  font-old sm:text-[16px]">
                  Its goal is to bring the museum's offerings to the public, especially those unable to visit, thereby highlighting the importance, value, and pride embedded in Nigerian culture and heritage.
                  </p>

                  <video width="420" height="320" autoPlay muted loop preload="none" >
                     <source src="/assets/museum.mp4" type="video/mp4" />
                 </video>
  

              </div>

        <Images/>

          

        </div>
         <Search />

    

        
    </>
  )
}

export default LandingPage