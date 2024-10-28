'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"


// import {useRef} from 'react'

// import { Canvas, useFrame} from '@react-three/fiber'

// import { Image } from '@react-three/drei'


const Images = () => {

    // const ref = useRef()

    const imageStyle = {
      borderRadius: '50%',
      border: '1px solid #fff',
      position: 'contain'
    }

  return (
    <> 
    <div className="lg:w-[50%] w-full border-[1px] md:border-0 border-black relative h-[100%] flex flex-col  bg-primary">
      <Link href='./photos'>
          <motion.svg
            whileHover={{scale: 1.4,
                        rotate:'45deg'}}
            transition={{ease: 'easeInOut', duration: 0.5}}
            className="absolute z-10 bottom-10 sm:-top-20" xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#1D1911"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></motion.svg>

      </Link>

           <div className="flex flex-row">
              
            {/* <h1 className=" text-[5vw] font-bold font-inter z-10 ">
              PHOTO GALLERY
            </h1> */}

            {/* <div className="  w-[50%] h-auto">
                
                <Image 
                        width={200}
                        height={400}
                        alt="navigation image"
                        // sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 33vw "
                      className=" object-contain"  src='/assets/alternative2.webp'/>
                </div> */}  
          </div>


          {/* <div className="  w-[200px] h-auto">
          <Image 
                    width={500}
              height={500}
                 
                   alt="navigation image"

                  // sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 33vw "
                className=" object-contain"  src='/assets/K.C-Murray.webp'/>
          </div> */}
          <div className="flex w-[100%] ">

    
                {/* <div className="  w-[50%] h-auto">
                <Image  
                          width={300}
                    height={500}
                      alt="navigation image"

                        // sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 33vw "
                      className=" object-contain"  src='/assets/National-Museum.webp'/>
                </div> */}

                <div className="  w-[50%] h-auto absolute ">
                <Image 
                    // fill
                    alt="navigation image"
                    width={300}
                    height={500}
                    className=" object-contain" src='/assets/Intelligence.webp'/>
                </div>

                {/* <div className="  w-[200px] h-auto">
                <Image  
                    alt="navigation image"
                          width={500}
                    height={500}
                        objectPosition="center"
                        // sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 33vw "
                      className="invisible lg:invisible  object-contain"  src='/assets/Museum3.webp'/>
                </div> */}

           
              </div>
          </div>

   

     {/* <Image url=''/> */}

    </>
  )
}

export default Images