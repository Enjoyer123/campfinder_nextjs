"use client"


import { SignOutButton } from "@clerk/nextjs"
import { toast } from "sonner"


const SignOutLink = () => {
   

    const handleLogout = () => {
        toast("Logouted",{
            description: "You have successfully logged out.",
            duration: 5000,
            
        })
    }

  return (
    <SignOutButton redirectUrl="/">
        <button onClick={handleLogout}>
            Sign Out
        </button>
    </SignOutButton>
  )
}
export default SignOutLink