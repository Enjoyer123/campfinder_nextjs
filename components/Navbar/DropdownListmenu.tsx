
import { AlignLeft, CircleUserRound } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import UserIcon from "./UserIcon"
import { Button } from "../ui/button"

import { links } from "../../utils/links"
import SignOutLink from "./SignOutLink"

import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
const DropdownListmenu = () => {
    return (



        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">

                    <AlignLeft />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <SignedOut>
                    <DropdownMenuItem>
                        <SignInButton mode="modal">
                            <button >
                                Sign In
                            </button>
                        </SignInButton>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <SignUpButton mode="modal">
                            <button >
                                Sign Up
                            </button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>



                <SignedIn>

                    {links.map((link, index) => {


                        return <DropdownMenuItem key={index}><Link href={link.href}> {link.label}</Link></DropdownMenuItem>
                    })}

                    <DropdownMenuSeparator />
                    <DropdownMenuItem>

                        <SignOutLink />
                    </DropdownMenuItem>
                </SignedIn>


            </DropdownMenuContent>
        </DropdownMenu>


    )
}
export default DropdownListmenu