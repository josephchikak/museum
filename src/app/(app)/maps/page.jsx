// 'use client'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Link from 'next/link'
import * as motion from "framer-motion/client"
import React from 'react'
import Image from 'next/image'

const Maps = async() => {


  const anim ={
    initial: {
      width:'100vw',
      // x: '100vw'
    },
    open: {
      width:'0',
      // x: 0
    },
    closed :{
      width:'100vw',
    }
  }


    const payload = await getPayloadHMR({config})

    const pages = await payload.find({
      collection:'maps',
      draft: false,
      limit: 1000,
    })




return (
 <>
   <div className='w-[100vw] min-h-[100vh] h-[100%] font-inter flex justify-between bg-background border-black border-t-[1px] flex-row p-8  overflow-hidden'>

     <div className='flex justify-between flex-col'>

       <div className='h-fit w-fit text-primary flex flex-col gap-4 text-[0.75rem] sm:text-[1rem]'>
         <h2 className='text-[2rem] sm:text-[3rem] uppercase font-bold pb-2'>Photo gallery</h2>
         {/* <Image
                style={{objectFit: "contain"}}
                className=""
                width={300} height={100}  src="/assets/Museum5.webp" alt="maps" />
                 */}
                <p className='font-old'>These are maps of Nigeria showing  the visual representation of areas, vegetation ,geographical locations, water ways and other relevant information like railway line, boundaries.</p>                
          
       <div className='p-8 columns-2 flex w-[100vw] h-fit justify-center gap-4'> 

          {
              pages.docs.map((page,i) => { 
                return (
                  <div key={page.id} id={page.id} className='flex flex-col justify-between p-8 gap-2 w-[40vw] h-[50vh] border-primary border-[1px] rounded-md bg-[#FFFDF5]'>
                      <div className='block relative w-[100%] h-[90%]'>
                         <Image
                             layout='fill'
                              alt={page.image.alt}
                              objectFit='contain'
                              loading='lazy'
                              
                              // width={500}
                              // height={500}
                        
                            src={page.image.url} className='bg-[#FFFDF5]'/>
        
                      </div>
                        
                     
        
                        <p className='font-inter font-light'>{page.description}</p>
        
                 </div>
                )

              })
            }
        
       </div>
   
         </div> 


     
         
      

     </div>


   <motion.div 
       variants={anim}
       initial='initial'
       animate='open'
       exit='closed'
       transition={{
         duration: 0.4,
         ease: 'easeOut'
       }}

       className='w-[100vw] bg-black h-[100vh] left-0 top-0 absolute'>


   </motion.div>

    </div>
        {/* <Images/> */}
    </>
  )
}

export default Maps