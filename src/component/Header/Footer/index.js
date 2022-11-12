import React from 'react'
import last from '../../../assets/images/last.png'
import grou from '../../../assets/icons/grou.svg';
import facebook from '../../../assets/icons/facebook.svg'
import twitter from '../../../assets/icons/twitter.svg'
import instagram from '../../../assets/icons/instagram.svg'


export default function Footer() {
  return (
    <div className='h-full bg-black w-full relative space-y-14 p-2'>
  
        
        <img className=' h-60 absolute' src={last}/>
        <div className='flex justify-center'>
          <img className='flex justify' src={grou}/>
        </div>
        <div className='flex justify-center'>
          <img className='mx-4' src={facebook}/>
          <img className='mx-4' src={twitter}/>
          <img className='mx-4' src={instagram}/>      
        </div>
        <h1 className='text-white flex justify-center'>Copyright © 2022. DWhitelist. All rights reserved.</h1>
      </div>
    

  )
}

