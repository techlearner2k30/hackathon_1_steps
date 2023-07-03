'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { useState } from 'react';

export default function Home() {

  const [isMenuOpen, setiIsMenuOpen] = useState(false);

  return (
    <div className='flex gap-5 justify-between max-w-[1200px] my-5 mx-auto items-center px-5'>

      <Image src="/Logo.webp" width={150} height={40} alt={''} />
      <ul className='max-[768px]:hidden flex gap-4 item-center'>
        <li><Link href="#"> Male</Link></li>
        <li><Link href="#"> Female</Link></li>
        <li><Link href="#"> Kids</Link></li>
        <li><Link href="#"> All Products</Link></li>
      </ul>
   <div className='min-[768px]:hidden min-[768px]:ml-auto order-3 relative' >
   <Button className='' onClick={()=>setiIsMenuOpen(!isMenuOpen)}> { !isMenuOpen ? "Menu" : <span className='text-xl'> x </span>} </Button>
   {isMenuOpen &&  
      <ul className='flex-col gap-4 item-center absolute w-[120px] right-[5px] bg-slate-200 py-2 px-4'>
        <li><Link href="#"> Male</Link></li>
        <li><Link href="#"> Female</Link></li>
        <li><Link href="#"> Kids</Link></li>
        <li><Link href="#"> All Products</Link></li>
        <li><Link href="#"> Cart</Link></li>
      </ul>
 }
  </div>
    <input type="text" className='border-2 h-6 rounded-lg max-[768px]:w-36'/>

    <Button className='max-[768px]:hidden'>Cart</Button>

  </div>

)
}
