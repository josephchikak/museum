import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Link from 'next/link'
import { section } from 'framer-motion/client'
import Search from '../../../components/Search'



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

  const alternative_heritages = await payload.find({
    collection:'alternative_heritages',
    draft: false,
    limit: 1000,
  })

  const alternative_archival_heritages = await payload.find({
    collection:'alternative_archival_heritages',
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
        <div className="flex relative items-center justify-center w-[100%] h-fit border-b-[1px] border-primary px-8 z-20">
          {/* <div className='w-[100%] h-[100%] pl-4'> */}
              {/* <div className='w-[100%] top-0 left-0 absolute flex items-center pl-4 h-[100%] overflow-hidden'> */}
                  <Link  href={'/'} className='justify-self-start	'
                   style={{
                    paddingLeft:'1rem',
                    bottom: '4px'
                   }}
                  >
                      <Image src={header.logo.url} alt='logo' width={40} height={40} />
                  </Link>
              {/* </div> */}

          {/* </div> */}
        
                
               <Nav className="" pages={header.nav} alternative_heritages={alternative_heritages} alternative_archival_heritages={alternative_archival_heritages} intelligence_reports={intelligence_reports} manuscripts={manuscripts} maps={maps} government_reports={government_reports}/>

            
          <div className='w-fit absolute right-4 p-4 top-2 h-fit invisible lg:visible'>
             <Search/>
          </div>
        </div>
    // </div>
  )
}

export default HeaderServer