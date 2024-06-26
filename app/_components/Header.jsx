"use client"

import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className='p-5 border-b shadow-sm'>
      <div className='flex items-center justify-between'>
        <Image 
          src='/logo.svg' 
          width={190} 
          height={50} 
          alt='logo' 
          priority 
        />  
        {isSignedIn ?
          <div className='flex items-center gap-5'>
            <Link href='/dashboard'>
              <Button variant="outline">Dashboard</Button>
            </Link>
            <UserButton />
          </div> :
          <SignInButton>
            <Button>Get started</Button>
          </SignInButton>
        }
      </div>
    </div>
  );
}

export default Header;
