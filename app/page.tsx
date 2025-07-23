import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>Hello how are uyou</h1>
      <Link href={'/products'}>Go to Products</Link> <br />
      <Link href={'/sign-in'}>Go to Login</Link> <br />
      <Link href={'/sign-up'}>Go to Register</Link> <br />

      <Link href={'/counter'}>Go to CounterApp</Link> <br />
      
      <Image src={'/imag.jpg'} width={150} height={180} alt='car'/>
    </div>
  )
}
