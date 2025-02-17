'use client'
import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import Image from 'next/image';
import productImage from '@/assets/product-image.png'
import { ValueAnimationTransition, animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Component, ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];


const FeatureTab = (tab: typeof tabs[number] & ComponentPropsWithoutRef<'div'> & {selected : boolean}) => {

  const tabRef = useRef<HTMLDivElement>(null)


  const dotlottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;

  useEffect(()=>{
    if(!tabRef.current || !tab.selected) return ;
    xPercentage.set(0)
    yPercentage.set(0)
    const {height , width} = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2 
    
    const times = [0 ,width / circumference , (width  +  height) / circumference , (width * 2 + height) / circumference,  1]
    const options:ValueAnimationTransition ={
      times,
      duration : 4 , 
      repeat :Infinity , 
      ease : 'linear',
      repeatType : 'loop'

    }

    animate(xPercentage , [0 , 100 , 100 , 0 , 0] , options );

    animate(yPercentage , [0 , 0 , 100 , 100 , 0] , options)
  } , [tab.selected])

  const handleTabHover = () => {
    if (dotlottieRef === null) {
      return
    }
    dotlottieRef.current?.seek(0);
    dotlottieRef.current?.play()
  }

  return <div ref={tabRef} onClick={tab.onClick} onMouseEnter={handleTabHover} className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative">
    {tab.selected &&  <motion.div 
      style = {{
        maskImage,
      }}
    className="absolute inset-0 -m-px rounded-xl border border-[#A369FF] "></motion.div>}
    
    <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
      <DotLottiePlayer ref={dotlottieRef} src={tab.icon} className='h-5 w-5' autoplay />

    </div>
    <div className="font-medium ">
      {tab.title}
    </div>
    {tab.isNew && (
      <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">new</div>
    )}
  </div>
}

export const Features = () => {
  const [selectedTab , setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX)
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY)

  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX)

  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  return <section className="py-20 md:py-24 ">
    <div className="container">
      <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Develop specific apps for your needs</h2>
      <p className="text-white/70 md:text-xl max-w-2xl mx-auto text-lg tracking-tight text-center mt-5 ">Build and deploy apps designed specificly for your needs, with our support and team 24/7 ready !!!</p>
      <div className="mt-10 flex flex-col lg:flex-row gap-3  ">
        {
          tabs.map((tab , index) => {
            return (
              <FeatureTab selected={selectedTab == index} onClick={()=>setSelectedTab(index)} {...tab} key={tab.title} />
            )
          })
        }

      </div>
      <motion.div className="border border-white/20 p-2.5 rounded-xl mt-3 ">
        <div className="aspect-video bg-cover border border-white/20 rounded-lg " 
        style={{
          backgroundPosition : `${backgroundPositionX}% ${backgroundPositionY}%`,
          backgroundSize : `${backgroundSizeX}% auto` , 
          backgroundImage: `url(${productImage.src})`,
        }}>

        </div>

      </motion.div>

    </div>
  </section>;
};
