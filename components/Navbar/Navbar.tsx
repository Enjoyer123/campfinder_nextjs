
import Logo from "./Logo"
import Search from "./Search"
import DarkMode from "./DarkMode"
import DropdownListmenu from "./DropdownListmenu"
const Navbar = () => {
    return (
        <nav className="bg-green-800">
            <div className="container flex items-center justify-between bg-green-300
            ">

                <Logo />
                <Search />
                <div className="flex items-center space-x-4">

                    <DarkMode />
                    <DropdownListmenu />
                </div>
            </div>
        </nav>
    )
}
export default Navbar