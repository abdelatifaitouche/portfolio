import InstaLogo from '@/assets/social-instagram.svg';
import XLogo from '@/assets/social-x.svg';
import YoutubeLogo from '@/assets/social-youtube.svg'
import LogoImage from '@/assets/logo.svg'

export const Footer = () => {
  return <footer className='py-5 border-t border-white/15'>
    <div className='container'>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        <div className='flex gap-2 items-center md:flex-1'>
          <LogoImage className='h-6 w-6' />
          <div className='font-medium '>
            Abdelatif Aitouche
          </div>
        </div>

          <nav className='flex flex-col gap-5 md:flex-row md:gap-7 md:flex-1  md:justify-center'>
            <a className='text-white/70  hover:text-white transition text-xs md:text-sm' href="#">Services</a>
            <a className='text-white/70 hover:text-white transition text-xs md:text-sm'href="#">About</a>
            <a className= 'text-white/70 hover:text-white transition text-xs md:text-sm 'href="#">Clients</a>

          </nav>
        

        <div className='flex gap-5 md:flex-1 md:justify-end '>
          <XLogo className='text-white/40 hover:text-white transition' />
          <YoutubeLogo className='text-white/40 hover:text-white transition' />
          <InstaLogo className='text-white/40 hover:text-white transition' />
        </div>
      </div>

    </div>

  </footer>;
};
