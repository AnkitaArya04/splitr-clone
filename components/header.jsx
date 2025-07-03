import React from 'react'
import { SignInButton,SignedOut,SignedIn, SignUpButton, UserButton } from "@clerk/nextjs";
const header = () => {
  return (
    <div>
      <SignedOut>
              <SignInButton />
              <SignUpButton>
                
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    </div>
  )
}

export default header
