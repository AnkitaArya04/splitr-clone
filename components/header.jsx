"use client"
// import React from 'react'
import { SignInButton,SignedOut,SignedIn, SignUpButton, UserButton } from "@clerk/nextjs";
import { useStoreUser } from '@/hooks/use-store-user';
import { BarLoader } from 'react-spinners';
import Link from "next/link";
import Image from "next/image";


const header = () => {
  const {isLoading}=useStoreUser();
  return (
    <header className="fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link  href="/" className="flex items-center gap-2">
      <Image
            src={"/logos/logo.png"}
            alt="Vehiql Logo"
            width={200}
            height={60}
            className="h-11 w-auto object-contain"
          />
      </Link>
      </nav>
            {isLoading && <BarLoader width={"100%"} color="#36d7b7" />}
    </header>
  )
}

export default header
