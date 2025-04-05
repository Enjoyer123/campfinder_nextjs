import { Button } from "../ui/button"
import Link from "next/link"



const Logo = () => {
  return (
    <Button size={"sm"} className="flex items-center space-x-2">

        <Link href="/" className="text-2xl">Logo</Link>

    </Button>
  )
}
export default Logo