import { useEffect, useState } from "react"
import axios from 'axios'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PetDetails from "./pages/PetDetails";
import SearchForm from "./pages/SearchForm";


export default function App() {
  const [pets, setPets] = useState([]);
  useEffect(()=>{
    if(pets.length === 0){
      axios.get('http://pets-v2.dev-apis.com/pets').then(e=>setPets(e.data.pets));
    }
  }, []);

  // console.log(pets);

  return (
    <div className="font-playwrite bg-[#fffbfc] h-svh">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage pets={pets}/>}/>
          <Route path="/home" element={<HomePage pets={pets}/>}/>
          <Route path="/petdetail" element={<PetDetails pets={pets}/>}/>
          <Route path="/searchform" element={<SearchForm pets={pets}/>}/>
          <Route path='*' element={<h1 className="text-5xl absolute top-[48%] left-1/2 -translate-x-2/4 hover:bg-black hover:text-white p-2 rounded-lg"><Link to="/home">404 No such page found!!!!<p className="text-xs">Click to go to homepage</p></Link></h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}