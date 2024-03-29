import { UserButton } from "@clerk/nextjs"
import MainNav from "./mainNav"
import StoreSwitcher from "./store-switcher"

function Navbar() {
  return (
        <div className=" border-b">
            <div className=" flex h-16 items-center px-4">
                <StoreSwitcher/>
                <MainNav className="mx-6"/>
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/"/>
                </div>
            </div>
        </div>
  )
}

export default Navbar