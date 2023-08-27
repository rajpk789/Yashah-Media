
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
    <main className="">

      <header className="flex justify-between bg-indigo-500">
        <div className="text-white p-2 w-28 flex items-center mx-8">
          <img className="" src="./log.jpg" alt="" />
         <h1 className="mx-8"> Ecomz</h1>
        </div>

        <nav className="flex items-center">
          {menuItem.map((item, index) => (
            <Link key={index} className="p-2 text-white" href={item.link}>{item.name}</Link>
          ))}
        </nav>
      </header>
    </main>
  )
}