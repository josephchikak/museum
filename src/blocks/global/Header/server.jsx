import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Link from 'next/link'
import { section } from 'framer-motion/client'


//   const SECTIONS = async() => {



//     return <div className='h-fit w-fit p-7 bg-primary text-background flex flex-col gap-4 z-10 text-[0.75rem]'>
//       {
//         pages.docs.map((page) => {
//           return <Link className='hover:border-b-2 border-background' href={`/${page.slug}`}> {page.internalName}</Link>

//         })
//       }
//       {/* <Link className='hover:border-b-2 border-background' href="/k.c_murray_manuscripts"> K.C MANUSCRIPTS</Link>
//       <Link className='hover:border-b-2 border-background' href="/intelligent_reports"> INTELLIGENT REPORTS</Link>
//       <Link className='hover:border-b-2 border-background' href="/government_reports"> GOVERNMENT REPORTS</Link>
//       <Link className='hover:border-b-2 border-background'href=""> PHOTOS</Link> */}
//     </div>
// } 




const HeaderServer = async() => {




 
    // params.map((doc) => {
    //   sections.push(doc.internalName)
    // })
 
    const payload = await getPayloadHMR({config})

    const header = await payload.findGlobal({
        slug: 'header'
    })

    const footer = await payload.findGlobal({
      slug: 'footer'
  })

  const intelligence_reports = await payload.find({
    collection:'intelligence_reports',
    draft: false,
    limit: 1000,
  })

  const manuscripts = await payload.find({
    collection:'manuscripts',
    draft: false,
    limit: 1000,
  })

  const maps = await payload.find({
    collection:'maps',
    draft: false,
    limit: 1000,
  })

  const government_reports = await payload.find({
    collection:'government_reports',
    draft: false,
    limit: 1000,
  })




 

  //   const pages = await payload.find({
  //     collection:'pages',
  //     draft: false,
  //     limit: 1000,
  // })
  


// console.log(government_reports)

  return (
    // <div>
        <div className="sticky top-0  bg-background w-[100vw] z-20">
          <div className='absolute p-2'>
              <Link  href={'/'}>
                  <Image src={header.logo.url} alt='logo' width={30} height={20}  className='object-contain'/>
              </Link>
          </div>

                
               <Nav className="" pages={header.nav} intelligence_reports={intelligence_reports} manuscripts={manuscripts} maps={maps} government_reports={government_reports}/>

        </div>
    // </div>
  )
}

export default HeaderServer