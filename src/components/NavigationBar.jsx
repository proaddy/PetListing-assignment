import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
        <nav className="flex justify-between m-4">
            <div className="flex items-center text-3xl">
                <img src="/dog.png" alt="icon" className="w-8 mr-2"/>
                Meet My pet
            </div>
            <ul className="flex items-center text-xl">
                <li className="mx-2"><Link to="/home">Home</Link></li>
                <li className="mx-2"><Link to="/searchform">Search Form</Link></li>
            </ul>
        </nav>
        <hr className="border-black w-full"/>
    </>
  )
}
