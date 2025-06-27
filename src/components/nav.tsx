import Link from "next/link"
export default function NavBar() {
    return (
        <div className="flex">
            <div> <Link href="/home">Home</Link></div>
            <div><Link href="/about">About</Link></div>
        </div>
    )
}