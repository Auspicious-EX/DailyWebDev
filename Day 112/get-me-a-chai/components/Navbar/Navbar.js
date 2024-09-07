"use client";
import React from 'react'
import Link from 'next/link'
import "./navbar.scss"
import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropDown, setshowDropDown] = useState(false);

  return (
    <nav>

      <div className='leftNav'>
        <Link href={'/'}><div className="logo">
          <img src="https://i.pinimg.com/originals/d7/3e/5c/d73e5c825c817c5211020e7253cbc023.png" alt="" />
          <span>Get me a CHai</span>
        </div></Link>

      </div>

      <div className='rightNav'>
        {!session && <Link href={"/Login"} ><button className='loginBtn'>Login </button></Link>}

        {session && <div className="dropdown">
          <button onClick={() => setshowDropDown(!showDropDown)} onBlur={() => { setTimeout(() => { setshowDropDown(false) }, 100) }} className='dropdownBtn'>Hello, {session.user.email}</button>
          <ul style={{ display: showDropDown ? 'flex' : 'none' }} >
            <Link href={"/dashboard"}><li>Dashboard</li></Link>
            <Link href={`/${session.user.name}`}><li>Your page</li></Link>
            <Link href={""}><li onClick={() => signOut()}>Signout</li></Link>
          </ul>
        </div>}

      </div>

    </nav>
  )
}

export default Navbar
