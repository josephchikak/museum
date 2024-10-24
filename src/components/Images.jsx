'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"


// import {useRef} from 'react'

// import { Canvas, useFrame} from '@react-three/fiber'

// import { Image } from '@react-three/drei'


const Images = () => {

    // const ref = useRef()

  return (
    <> 
    <div className="lg:w-[50%] w-full border-[1px] md:border-0 border-black relative h-[50vh] flex flex-col bg-background">
      <Link href='./photos'>
          
          <motion.svg
            whileHover={{scale: 1.4,
                        rotate:'45deg'}}
            transition={{ease: 'easeInOut', duration: 0.5}}
            className="absolute z-10 bottom-10 sm:top-0" xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#1D1911"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></motion.svg>

      </Link>

      <h1 className="absolute text-[7vw] top-[40%] left-[30px] font-bold font-inter z-10 ">
        PHOTO GALLERY
      </h1>
        <div className=" columns-2 flex w-[100%] p-20 h-[100%] relative">
          <div className=" block sm:w-[50%] w-[30%] h-[200px] sm:left-[5%] top-2 right-[10px] absolute">
          <Image 
              fill
              objectPosition="center"
        
              //  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
              className="absolute object-contain object-contain" src='/assets/Intelligence.webp'/>
          </div>

          <div className=" w-[200px] sm:h-[70%] h-[200px] top-2 right-[30px]  absolute block">
          <Image 
                  fill
                  objectPosition="center"
                 
                  // sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 33vw "
                className=" object-contain"  src='/assets/K.C-Murray.webp'/>
          </div>

          <div className="w-[200px] h-[200px] top-[100px] right-[70px]  absolute block">
          <Image  
                  fill
          

                  // sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 33vw "
                className=" object-contain"  src='/assets/National-Museum.webp'/>
          </div>

          <div className="w-[100%] h-[150px] sm:-bottom-[45px] invisible sm:visible sm:left-[200px] -bottom-[20px] left-[10px]  absolute block">
           
          <Image  
                  fill
                  objectPosition="center"
                  // sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 33vw "
                className="invisible lg:invisible  object-contain"  src='/assets/Museum3.webp'/>
          </div>

          <div className="sm:w-[60%] w-[50%] h-[200px] sm:right-[30%] top-[50%] right-[5%]  absolute block">
          
          <Image 
                  fill
            
                  // sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 33vw "
                className=" object-contain"  src='/assets/alternative2.webp'/>
          </div>
         
         
        

        </div>
        <div className="">
 
        </div>
    </div>
     {/* <Image url=''/> */}

    </>
  )
}

export default Images