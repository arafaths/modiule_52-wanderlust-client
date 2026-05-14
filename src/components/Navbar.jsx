import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/destinations'}>Destinations</Link>
      </li>
      <li>
        <Link href={'/my-bookings'}>My Bookings</Link>
      </li>
      <li>
        <Link href={'/admin'}>Admin</Link>
      </li>
      <li>
        <Link href={'/add-destination'}>Add Destination</Link>
      </li>
    </>
  );

  const navBtn = (
    <>
      <li>
        <Link href={'/profile'}>
          <AiOutlineUser />
          Profile
        </Link>
      </li>
      <li>
        <Link href={'/login'}>Login</Link>
      </li>
      <li>
        <Link href={'/signup'}>Sign Up</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
      </div>
      <div className="navbar-center">
        <Image
          src={'/assets/Wanderlast.png'}
          height={150}
          width={150}
          alt="Logo"
        />
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">{navBtn}</ul>
      </div>
    </div>
  );
};

export default Navbar;
