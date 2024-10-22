'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, easeOut, motion } from "framer-motion"
import useStore from '../utils/useStore'
import Search from './Search'


const FlyoutLink = ({children, href, FlyoutContent, intelligence_reports, maps, manuscripts, government_reports, alternative_heritages, alternative_archival_heritages}) =>{

  const updateSections = useStore((state) => state.updateSections)


  const [open, setOpen] = useState(false)


  const showFlyout = open && FlyoutContent

  const handleEnter = () =>{
    // setOpen(false)

    if(href === '/intelligence_reports'){
      updateSections(intelligence_reports)
   }
    else if (href === '/maps'){
      updateSections(maps)}
      else if (href === '/government_reports'){
        updateSections(government_reports)}
        else if (href === '/manuscripts'){
          updateSections(manuscripts)}
        else if (href === '/alternative_heritages'){
          updateSections(alternative_heritages)}
          else if (href === '/alternative_archival_heritages'){
            updateSections(alternative_archival_heritages)}
      else {
        updateSections({docs:[]})
      }

    setOpen(true)

    }


  return(
    <div 
        onMouseEnter={() => handleEnter()}
        onMouseLeave={() => setOpen(false)}
        className='relative h-fit w-fit'>
      <Link className='relative' href={href}>{children}
      <span 
      style={{ 
        transform: open ? 'scaleX(1)' : 'scaleX(0)'
       }}
      className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-sm bg-black transition-transform duration-300 ease-out'></span>
      </Link>
      <AnimatePresence>

      {showFlyout && (
        <motion.div
          initial={{opaity: 0, y: 10 }}
          animate={{opaity: 1, y: -6 }}
          // exit={{opaity: 0, y: 10 }}
          style={{x: '-50%',
                  // y: '-'          
        }}
          transition={{duration: 0.5, ease: 'easeOut',  type: "spring"}}
          className='absolute left-1/2 top-12  text-white z-10'>

            {/* <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary'/> */}
              <FlyoutContent/>
        </motion.div>)
      }
      </AnimatePresence>

    </div>
  )
}



const Nav = ({pages, intelligence_reports, maps, manuscripts, government_reports, alternative_heritages, alternative_archival_heritages}) => {

// if( pages.)
const [navOpen, setNavOpen] = useState(false)


  const SUBSECTIONS = () =>{

    

    const sections = useStore((state) => state.sections)


    return (
      <>
      {
        sections !== undefined && sections.docs.length ?
      
        <div className='h-fit w-[20vw] p-7 relative left-[80%] -top-20 bg-background text-primary flex flex-col gap-4 z-20 text-[0.75rem]'>
            <div className='absolute -top-6 left-0 right-0 h-8 bg-primary'/>
            <div className='absolute -top-8 right-[100%] w-[20%] h-full bg-transparent'/>


            {/* <div className='absolute -top-10  h-10 w-10 bg-black'/> */}

            {
                sections.docs.map((page,i) => { 
                  return <Link key={i} className='hover:text-background w-fit hover:bg-primary border-primary uppercase p-4' href={`/${page.nav[0].link}`}> {page.nav[0].label}</Link>

                } )
              }

        </div>
        :
        <></>

      }
      
      </>
    )
} 

  const SECTIONS = () =>{

    // const [sections, setSections] = useState('')

    // console.log(intelligence_reports)
   
  
      return <div className=' h-fit w-[50vw] sm:h-fit sm:w-[18vw] p-7 relative bg-primary text-background flex flex-col gap-4 z-20 text-[0.75rem]'>
        {/* {navOpen : */}
            <div className='absolute -top-6 left-0 right-0 h-6 bg-background'/>

   

                {
              pages.map((page,i) => { 
                 
                return (
                    
                      navOpen ?
                       <li onClick={() => setNavOpen(false)}>
                          <FlyoutLink  key={i} alternative_archival_heritages={alternative_archival_heritages} alternative_heritages={alternative_heritages} intelligence_reports={intelligence_reports} manuscripts={manuscripts} maps={maps} government_reports={government_reports} className='hover:border-b-2 border-background' href={`/${page.link}`}> {page.label}</FlyoutLink>
                     
                       </li> 
                       :

                      <FlyoutLink key={i} alternative_heritages={alternative_heritages} intelligence_reports={intelligence_reports} manuscripts={manuscripts} maps={maps} government_reports={government_reports} alternative_archival_heritages={alternative_archival_heritages} className='hover:border-b-2 border-background' href={`/${page.link}`} FlyoutContent={SUBSECTIONS}> {page.label}</FlyoutLink>

                    
              )

                  })
                }
            
             </div>
       
  } 


  return (
    <div className=' h-[5vh] w-[100vw] font-inter font-light flex justify-center items-center text-primary  sm:text-[0.75rem] text-0.5 border-primary uppercase '>
        <nav className='p-4 invisible sm:visible'>
          <ul className='flex gap-4 '>
          <li>  <FlyoutLink href='/' >
                HOME
               </FlyoutLink>
             </li>
            <li>
              <FlyoutLink href='/about'>
                  ABOUT
              </FlyoutLink>
            </li>
            <li>  <FlyoutLink href='#' FlyoutContent={SECTIONS} >
                SECTIONS
               </FlyoutLink>
             </li>
           

             <li>  <FlyoutLink href='/photos' >
                PHOTOS
               </FlyoutLink>
             </li>

            {/* <li className='w-fit margin-r-auto h-[100%]  '>

            </li> */}
  
      </ul>
            {/* <li> </li> */}
        </nav>

        <nav className='visible sm:invisible w-fit absolute right-0 pr-2 z-20'>
          {navOpen ? 
          <>
             <svg onClick={() => setNavOpen(!navOpen)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1D1911"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>

            <motion.div

            initial={{opacity: 0, y: 20 }}
            animate={{opacity: 1, y: 0 }}
            exit={{opaity: 0, y: 10 }}
            style={{x: '-50%',
            // zIndex: 100,
            }}
            transition={{duration: 0.2, ease: 'easeOut'}}
            // className='z-20'
            >
               <ul className='flex gap-4 absolute flex-col right-0 z-10 bg-background p-2 w-[50vw] justify-around h-[30vh] text-[0.75rem]'>
                   <li className='bg-primary text-background p-2  rounded-md' onClick={() => setNavOpen(false)}>  <FlyoutLink href='/' >
                      HOME
                    </FlyoutLink>
                  </li>
                  <li className='bg-primary text-background p-2 rounded-md' onClick={() => setNavOpen(false)}>
                    <FlyoutLink href='/about' onClick={() => setNavOpen(false)}>
                        ABOUT
                    </FlyoutLink>
                  </li>
                  <li  className='bg-primary text-background p-2  rounded-md' >  <FlyoutLink href='#' FlyoutContent={SECTIONS} >
                      SECTIONS
                    </FlyoutLink>
                  </li>

                  <li className='bg-primary text-background p-2  rounded-md' onClick={() => setNavOpen(false)}>  <FlyoutLink href='/photos' >
                      PHOTOS
                    </FlyoutLink>
                  </li>
             
             </ul>
            </motion.div>
          </>
              
           :
     
           <svg onClick={() => setNavOpen(!navOpen)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1D1911"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          }
        </nav>


    </div>
  )
}

export default Nav