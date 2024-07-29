import { Suspense, useState, lazy } from "react";
import { useLocation } from "react-router-dom";
import Petlist from "../components/PetList"
import NavigationBar from "../components/NavigationBar";

export default function HomePage({pets}) {
    const [type, setType] = useState('All');
    let pet = [...pets];

    const animalList = pets.reduce((a, e)=>{if(!a.includes(e.animal)){a.push(e.animal)};return a}, ["All"]);

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
        <Suspense fallback={<Loading/>}>
            <div className="flex flex-col">
                <NavigationBar/>

                <div className="p-4">
                    Animal Filter |  <select name="animalList" onChange={e=>setType(e.target.value)} className="p-1 mx-1">
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

                <div className="p-4">
                    <Petlist petsInfo={type === 'All' ? pet : pet.filter((e)=> {return e.animal === type})}/>
                </div>
            </div>
        </Suspense>
    )
}

function Loading() {
    return (
        <h1>💫 loading....</h1>
    )
}