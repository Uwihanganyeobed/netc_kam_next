import Link from 'next/link'
import React from 'react'
import Button from './button'

export default function Navbar() {
  return (
    <div className='bg-green-700 text-white'>
      <nav className='flex items-center gap-3 justify-between p-2'>
        <Link href={'/'}>Home</Link>
        <Link href={'/dashboard'}>Dashboard</Link>
        <Link href={'/counter'}>Counter</Link>
        <Button name={'Account'} />
      </nav>
    </div>
  )
}
