'use client'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton'

export default function Navbar({user}) {
  return (
    <div className='flex justify-around py-10'>
    <h1>
    Logo
    </h1>
    <Link href='/login'>
        Login
    </Link>
    <Link href='/auth/signup'>
        Signup
    </Link>
    {user && <p>{user.email}</p>}
    <LogoutButton/>
    </div>
  )
}
