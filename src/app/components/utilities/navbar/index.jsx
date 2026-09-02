import Link from "next/link"
import InputSearch from "./InputSearch"
import UserAction from "./UserAction"

const Navbar = () => {
    return (
        <header className="bg-color-primary">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="font-bold text-2xl text-color-dark">CUYANIMELIST</Link>
                <InputSearch />
                <UserAction />
            </div>
        </header>
    )
}

export default Navbar