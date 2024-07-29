import { Link, useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();
  const goto = ()=>{
    navigate("/home", {state:null})
  }
  return (
    <>
        <nav className="flex justify-between m-4">
            <div className="flex items-center text-3xl">
                <img src="/dog.png" alt="icon" className="w-8 mr-2"/>
                <span onClick={goto} className="cursor-pointer">Meet My Pet</span>
            </div>
            <ul className="flex items-center text-xl">
                <li className="mx-3 cursor-pointer" onClick={goto}>Home</li>
                <li className="mx-3"><Link to="/searchform">Search Form</Link></li>
            </ul>
        </nav>
        <hr className="border-black w-full"/>
    </>
  )
}
