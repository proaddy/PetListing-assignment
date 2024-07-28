import { useState } from "react";
import Petlist from "../components/PetList"
import NavigationBar from "../components/NavigationBar";

export default function HomePage({pets}) {
    // console.log(pets);
    const [city, setCity] = useState('');
    const [animal, setAnimal] = useState('');
    const [breed, setBreed] = useState('');
    return (
        <div className="flex flex-col">
        {/* ---------- navbar ---------- */}
            <NavigationBar/>

        {/* ----------- Filters ----------- */}
            <div id="filters" className="p-4">
                filters |  
            </div>
            <hr className="border border-gray-200 w-[96%] self-center"/>

        {/* ----------- Main Content ------------ */}
            <div className="p-4 flex flex-wrap">
                <Petlist petsInfo={pets} cityfil={city} animalfil={animal} breedfill={breed}/>
            </div>
        </div>
    )
}