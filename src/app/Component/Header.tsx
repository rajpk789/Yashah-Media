
import Link from "next/link";

const menuItem = [
    {
        name: 'Home',
        link: '/home'
    },
    {
        name: 'About',
        link: '/About'
    },
    {
        name: 'Product',
        link: '/product'
    },
    {
        name: 'Contact Us',
        link: '/contact'
    },
    {
        name: 'Login',
        link: '/login'
    }

]

export default function Home() {
    return (
        <main className="container bg-slate-400">

            <header className="flex justify-between px-8">
                <div className="p-2 w-46 flex items-center">
                 <Link href={""}>   <img className="" src="./logo.png" alt="" /></Link>
                

                </div>

                <nav className="flex items-center ">
                    {menuItem.map((item, index) => (
                        <Link key={index} className="p-2 " href={item.link}>{item.name}</Link>
                    ))}
                </nav>
            </header>
        </main>
    )
}