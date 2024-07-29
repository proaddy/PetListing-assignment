import { useState, useEffect } from "react";
import Petlist from "../components/PetList"
import NavigationBar from "../components/NavigationBar";
import { useLocation } from "react-router-dom";
import axios from 'axios';

export default function HomePage({pets}) {
    const [type, setType] = useState('All');
    let pet = [...pets];

    const animalList = pets.reduce((a, e)=>{if(!a.includes(e.animal)){a.push(e.animal)};return a}, ["All"]);
    // console.log(animalList, "animals")

    const locate = useLocation();
    if(locate.state) {
        pet = pets.filter((e)=>{
            if(
                locate.state.location === `${e.city}, ${e.state}` && 
                locate.state.animal === e.animal &&
                locate.state.breed === e.breed
            ) {
                return e;
            }})
    }

    return (
        <div className="flex flex-col">
        {/* ---------- navbar ---------- */}
            <NavigationBar/>

        {/* ----------- Filters ----------- */}
            <div id="filters" className="p-4">
                Animal Filter |  <select name="animals" onChange={e=>setType(e.target.value)} className="p-1 mx-1">
                    {
                        animalList.map((e, i) => {
                            return (
                                <option key={i} value={e}>{e}</option>
                            )
                        })
                    }
                </select>
            </div>
            <hr className="border border-gray-200 w-[96%] self-center"/>

        {/* ----------- Main Content ------------ */}
            <div className="p-4">
                <Petlist petsInfo={type === 'All' ? pet : pet.filter((e)=> {return e.animal === type})}/>
            </div>
        </div>
    )
}