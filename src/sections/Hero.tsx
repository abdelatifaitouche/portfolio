'use client'

import Button from "@/components/Button";
import Starsbg from '@/assets/stars.png'
import {motion , useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
import { useRef } from "react";
export const Hero = () => {


  const sectionRef = useRef(null)

  const {scrollYProgress} = useScroll(
    {
      target : sectionRef , 
      offset : ['start end' , 'end start']
    }
  )

 const backgroundPositionY = useTransform(scrollYProgress , [0 , 1] , [-300 , 300])
  return <motion.section 
  ref = {sectionRef}
    animate ={{
      backgroundPositionX:Starsbg.width,
    }}
    transition = {{
      repeat : Infinity , 
      ease : 'linear',
      duration : 100
    }}
  className="md:h-[800px] h-[492px] flex items-center overflow-hidden overflow-x-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] "
   style={{
    backgroundImage: `url(${Starsbg.src})`,
    backgroundPositionY
  }} >
    <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,68,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]">

    </div>
    {/* Start of the planet */}
    <div className="absolute md:h-96 md:w-96  h-64 w-64 bg-purple-500 rounded-full border border-white/20
   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))]
     shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0px_0px_50px_rgb(140,69,255)]" >

    </div>
    {/* Start of ring 1 */}
    <motion.div style={{
      translateY : '-50%',
      translateX : '-50%'
    }}
     animate={{
      rotate : '1turn'
    }}
    transition={{
      repeat : Infinity,
      ease : 'linear',
      duration : 60,
    }}
    className='absolute md:h-[580px] md:w-[580px] h-[344px] w-[344px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-20'>
      <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 ">

      </div>
      <div className="absolute h-2 w-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ">

      </div>
      <div className="absolute h-5 w-5 border border-white inline-flex items-center justify-center rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 ">
        <div className="h-2 w-2 bg-white rounded-full">

        </div>
      </div>
    </motion.div>
    {/* Start of ring 2 */}
    <motion.div animate={{
      rotate : '-1turn'
    }}
    transition={{
      repeat : Infinity,
      ease : 'linear',
      duration : 60,
    }}
    style={{
      translateX : '-50%',
      translateY : '-50%'
    }}
    className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed">

    </motion.div>
    {/* Start of ring 3 */}
    <motion.div animate={{
      rotate : '1turn'
    }}
    transition={{
      repeat : Infinity,
      ease : 'linear',
      duration : 60,
    }}
    style={{
      translateX : '-50%',
      translateY : '-50%'
    }}
    
    className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full opacity-20 border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 ">

      </div>
      <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 ">

      </div>
    </motion.div>
    {/* start of the content */}
    <div className="container relative mt-16">
      <h1 className='text-6xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] text-transparent bg-clip-text text-center'>IT Consultant</h1>
      <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center">We give you the power to take your business to the next Level, using the latest AI tools, High level Processes and more</p>
      <div className='flex justify-center mt-5'>
        <Button>Contact us</Button>
      </div>


    </div>
  </motion.section>;
};