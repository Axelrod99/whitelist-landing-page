import React from 'react'
import first from '../../assets/icons/first.svg';
import magnifying from '../../assets/icons/magnifying.svg';
import arrow from '../../assets/icons/arrow.svg';

export default function Header() {
  return (
    <header className='flex justify-between p-4 h-20 items-center border-b-2'>
        <img className='h-10' src={first}/>
        <div className='rounded-xl border border-grey px-2 hidden sm:flex'>
            <img className='' src={magnifying}/>
            <input placeholder='Search Projects' className='rounded-xl w-56 min-w-[30px] h-7'></input>
        </div>


        <button className=' rounded-3xl bg-blue-500 p-2 min-w-fit text-white flex whitespace-nowrap'>List your Whitelist spot <img className='' src={arrow}/></button>
    </header>
  )
}
