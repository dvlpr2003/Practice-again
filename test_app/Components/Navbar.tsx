import Link from "next/link"


const Navbar = ()=>{
    return(
        <nav className="flex gap-3">

            <div>
                <Link href = "/">Home</Link>
            </div>
            
            <div>
                <Link href="/dashboard">Dashboard</Link>
            </div>

            <div>
                <Link href="/Pricing">Pricing</Link>
            </div>

            <div>
                <Link href="/Privacy">Privacy</Link>
            </div>

            <div>
                <Link href="/About">About</Link>
            </div>
        </nav>
    )
}

export default Navbar;