import { notFound } from 'next/navigation'
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React, {cache} from 'react'
import { RenderBlocks } from '../../../../utils/RenderBlocks'
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

  

      // console.log(page)
      
  return (
    <article>

          <div className=" w-[100vw] flex justify-start p-5 border-b-[1px] border-black ">
                <div className="w-[50vw] flex flex-col gap-8">   
                {/* <Search pages={page}/> */}
      
      {/* <InstantSearchSSRProvider {...serverState}>

                <InstantSearch indexName='cards' searchClient={searchClient} insights>
                  <div>
                    <SearchBox classNames={{
                      input:
                      "block w-full p-4 ps-10 text-sm text-gray-900 border border-primary rounded-lg bg-background focus:ring-primary focus:border-primary  dark:text-black",
                      submitIcon: 'hidden',
                      form:'relative',
                      resetIcon:'hidden'
                    }}/>
                    <Hits hitComponent={Hit}/>
      
                  </div>
      
                    </InstantSearch>
      </InstantSearchSSRProvider> */}

     
                    </div>      
                </div>
 
    <div className='w-[100vw] min-h-[100vh]  overflow-hidden h-[100%] font-inter flex flex-col gap-4 p-8'>
         <h1 className='sm:text-[3rem] text-[2rem] font-bold pb-8 uppercase' >{page.internalName}</h1>
          {/* <Groups title='title'/>
          <Groups title='title'/>
          <Groups title='title'/> */}

<RenderBlocks blocks={page.pageSection.layout}/>

          
        </div>

  




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
