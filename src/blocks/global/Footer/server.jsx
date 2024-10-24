import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Link from 'next/link'


import Image from 'next/image'

const FooterServer = async() => {

   
  const payload = await getPayloadHMR({config})

  const footer = await payload.findGlobal({
      slug: 'footer'
  })

  const header = await payload.findGlobal({
    slug: 'header'
})


  

  return (
    <>
      <div className='w-[100vw] h-fit flex justify-between bg-primary border-black border-t-[1px] flex-col gap-4 sm:flex-row p-8 '>
 
        <div className='flex justify-between flex-col gap-4'>

          <div className='h-fit w-fit text-background flex flex-col gap-4 z-10 text-[0.75rem] uppercase'>
            <h2 className='text-[1rem] text-black'>Quick Links</h2>
                {
              header.nav.map((link,i) => { 
                return <Link key={i} className='hover:border-b-2 border-background' href={`/${link.link}`}> {link.label}</Link>

              })
            }
      
            </div> 

            <p className='text-background sm:w-[50%] font-light mt-4 text-[0.75rem]'>
              {footer["copyrightNot ice"]}
            </p>
              
            <Link href='https://uzoma.studio/' target='_blank'>
              <p className='text-background  font-light mt-4 text-[0.75rem]'>
                Designed and developed by Uzoma Studio
              </p>
            </Link>
            
         

        </div>

        <div className='flex h-[50] justify-end sm:h-[100%] w-fit gap-4 flex-col text-background' >

            <div className='items-center h-fit flex'>
              <Image src={footer.logo.url} alt='logo' width={50} height={10} className=' sm:p-4 object-contain h-fit' />

              <Link href='/' className='text-background  h-fit font-bold'> 
                NATIONAL MUSEUM LAGOS
              </Link>

            </div>

            <p className='text-[0.75rem] sm:p-4'>
              Address: <br />
              King George V. Road, Onikan, P.M.B. 12556, Lagos State.
            </p>

            <div className='flex gap-4'>
             <Image src='/assets/ifra.png' alt='logo' width={100} height={10} className=' sm:p-4 object-contain h-fit' />

             <Image src='/assets/ifra2.png'alt='logo' width={100} height={10} className=' sm:p-4 object-contain h-fit' />

             <Image src='/assets/CNRS.png'alt='logo' width={100} height={10} className=' sm:p-4 pt-4 object-contain h-fit' />

            </div>

            <div>
              <p className='text-[0.75rem] sm:p-4'> This project is funded by the French Embassy in Nigeria through IFRA-NIGERIA FSPI PROJECT</p>
            </div>

          
            
        </div>


          {/* <Image src={footer.logo.url} alt='logo' width={64} height={20} className=' p-4 object-contain'/> */}


        

        </div>

    </>
  )
}

export default FooterServer