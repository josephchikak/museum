import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Link from 'next/link'
import * as motion from "framer-motion/client"
import Image from 'next/image'

const Manuscripts = () => {

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
    collection:'manuscripts',
    draft: false,
    limit: 1000,
})

  return (
      <>
          {
              pages.docs.map((page,i) => { 
                return <Link key={i} className='border-background font-semibold text-sm  hover:text-[#006600] uppercase' href={`/${page.nav[0].link}`}> {page.nav[0].label}</Link>

              })
            }
      
      </>
  )
}
   


  return (
    <>
      <div className='w-[100vw] min-h-[100vh] h-[100%]  relative flex justify-between bg-background border-black border-t-[1px] flex-row p-8 '>

        <div className='flex justify-between flex-col'>

          <div className='h-fit w-fit flex flex-col gap-4 z-10 text-[0.75rem] sm:text-[1rem]'>
          <h2 className='text-[2rem] sm:text-[3rem] text-primary font-bold pb-2 '>K.C. MURRAY MANUSCRIPTS</h2>

          <Image
                style={{objectFit: "contain"}}
                className=""
                width={300} height={100}  src="/assets/Museum.webp" alt="maps" />
                
                <p className='font-playfair text-[18px]'>Page description will be written here</p>                
                    
          <div className='pb-8 flex flex-col gap-2 uppercase'>

            <h2 className='font-normal text-[1rem]'>SECTIONS</h2>

            <ul className='flex flex-col gap-2 text-[1rem]'>
              <li>
                <Link href={'/manuscripts/k.c_murray/k.c_murray_expeditions'}>
                K.C. Murray Expedition
                </Link>
              </li>

              <li>
                <Link href={'/manuscripts/k.c_murray/k.c_murray_correspondence'}>
                K.C. Murray Correspondence 
                </Link>
              </li>

              <li>
                <Link href={'/manuscripts/k.c_murray/k.c_murray_education'}>
                K.C. Murray Education
                </Link>
              </li>

              <li>
                <Link href={'/manuscripts/k.c_murray/k.c_murray_field_works'}>
                K.C. Murray Field works 
                </Link>
              </li>

              <li>
                <Link href={'/manuscripts/k.c_murray/k.c_murray_notes'}>
                  K.C MURRAY NOTES
                </Link>
              </li>
            </ul>
            {/* <Pages/> */}

          </div>
      
            </div> 


        </div>

   


          {/* <Image src={footer.logo.url} alt='logo' width={64} height={20} className=' p-4 object-contain'/> */}


        
         <motion.div 
          variants={anim}
          initial='initial'
          animate='open'
          exit='closed'
          transition={{
            duration: 0.5,
            ease: 'easeOut'
          }}

          className='w-[100vw] bg-black h-[100vh] left-0 top-0 absolute'>


      </motion.div>

   

        </div>

    </>
  )
}

export default Manuscripts