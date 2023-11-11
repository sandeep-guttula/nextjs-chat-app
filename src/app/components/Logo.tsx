import Link from 'next/link'
import React from 'react'
import { AspectRatio } from '../../components/ui/aspect-ratio'
import Image from 'next/image'
import logo from '../images/logos/next-js-icon-seeklogo.com.svg'

const Logo = () => {
  return (
    <Link href="/" prefetch={false} className='overflow-hidden' >
        <div className='flext items-center w-12 h-12' >
            <AspectRatio ratio={16/9} >
              {/* <h1 className='font-extrabold text-3xl' >Chat with Anyone</h1> */}
                <Image 
                    src={logo} 
                    alt={''} 
                    className='dark:filter dark:invert'
                />
            </AspectRatio>
        </div>
        {/* <h1 className='text-2xl font-extrabold' >Chat With Me</h1> */}
    </Link>
  )
}

export default Logo