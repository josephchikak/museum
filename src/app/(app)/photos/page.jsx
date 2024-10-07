// 'use client'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Link from 'next/link'
import * as motion from "framer-motion/client"
import React from 'react'
import Image from 'next/image'


const Photos = async() => {


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
      collection:'photos',
      draft: false,
      limit: 1000,
    })




return (
 <>
   <div className='w-fit  min-h-[100vh] h-[100%]  font-inter flex justify-between bg-background border-black border-t-[1px] flex-row p-8 '>

     <div className='flex justify-between flex-col'>

       <div className='h-fit w-fit text-primary flex flex-col gap-4 text-[0.75rem] sm:text-[1rem]'>
         <h2 className='text-[2rem] sm:text-[3rem] uppercase font-bold pb-2'>Photo gallery</h2>

         {/* <Image /> */}
             <p>Page description will be written here</p>                
                 
       <div className='p-8 columns-2 flex w-[100vw] h-fit justify-center gap-4'> 

          {
              pages.docs.map((page,i) => { 
                return (
                  <div id={page.id} className='flex flex-col justify-between p-8 gap-2 w-[40vw] h-[50vh] border-primary border-[5px] rounded-md bg-background'>
                      <div className='block relative w-[100%] h-[90%]'>
                         <Image
                             layout='fill'
                              alt={page.image.alt}
                              objectFit='contain'
                              loading='lazy'
                              
                              // width={500}
                              // height={500}
                        
                            src={page.image.url} className='bg-background'/>
        
                      </div>
                        
                     
        
                        <p className='font-inter text-primary font-light'>{page.description}</p>
        
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

export default Photos