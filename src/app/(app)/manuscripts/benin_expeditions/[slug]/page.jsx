import { notFound } from 'next/navigation'
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React, {cache} from 'react'
import { RenderBlocks } from '@/utils/RenderBlocks'
import * as motion from "framer-motion/client"
import { algoliasearch } from 'algoliasearch';
import Search from '@/components/Search'
import Link from 'next/link'


// const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY);


const Page =  async({params}) => {
  
  const result = await params

  const slug = result.slug

    let page

    page = await queryPageBySlug({
        slug,
    })

    if (!page) {
        return notFound()
    }

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

      // console.log(page)
      
  return (
    <article>


    <div className='w-[100vw]  min-h-[100vh]  overflow-hidden h-[100%] font-inter flex flex-col gap-4 p-8'>
         <h1 className='sm:text-[3rem] text-[2rem] font-bold pb-8 uppercase' >{page.internalName}</h1>
          {/* <Groups title='title'/>
          <Groups title='title'/>
          <Groups title='title'/> */}

        <RenderBlocks blocks={page.pageSection.layout}/>

          
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

          className='w-[100vw] bg-black h-[100vh] top-0 absolute'>


      </motion.div>





    </article>
  )
}

export default Page

  
const queryPageBySlug = cache(async({slug}) => {
    
  const parsedSlug = decodeURIComponent(slug)

  const payload = await getPayloadHMR({ config })

  const result = await payload.find({
      collection:'pages',
      limit:1,
      where:{
          slug:{
              equals: parsedSlug,
          }
      }
  })

  return result.docs?.[0] || null
})

export const generateStaticParams = async() => {

  const payload = await getPayloadHMR({ config })

  const pages = await payload.find({
      collection:'pages',
      draft: false,
      limit: 1000,
  })

  return pages.docs
      ?.filter((doc) => {
          return doc.slug !== 'index'
      }).map(({slug}) => slug)
  }
