import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Link from 'next/link'
import * as motion from "framer-motion/client"

import Image from 'next/image'

const Government = () => {
  
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

   
  const Pages = async() => {

  
  

    const payload = await getPayloadHMR({config})
 
   const pages = await payload.find({
     collection:'government_reports',
     draft: false,
     limit: 1000,
 })
 
   return (
       <>
           {
               pages.docs.map((page,i) => { 
                 return <Link key={i} className='border-background uppercase' href={`/${page.nav[0].link}`}> {page.nav[0].label}</Link>
 
               })
             }
       
       </>
   )
 }
    
  return (
    <>
      <div className='w-[100vw] h-fit  flex justify-between bg-background border-black border-t-[1px] flex-row p-8 '>

        <div className='flex justify-between flex-col'>

          <div className='h-fit w-fit text-primary flex flex-col gap-4 z-10 text-[0.75rem] sm:text-[1rem]'>
            <h2 className='text-[2rem] sm:text-[3rem] font-bold pb-2 z-1'>GOVERNMENT REPORTS</h2>
            <Image
                style={{objectFit: "contain"}}
                className=""
                width={300} height={100}  src="/assets/Museum.webp" alt="maps" />
                
                <p className='font-playfair text-[18px]'>Page description will be written here</p>                
                    
          <div className='pb-8 flex flex-col gap-2'>

            <h2 className='font-bold text-[1rem]'>SECTIONS</h2>
            <Pages/>

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


          {/* <Image src={footer.logo.url} alt='logo' width={64} height={20} className=' p-4 object-contain'/> */}


        

        </div>

    </>
  )
}

export default Government