import { useState } from "react"
import NavigationBar from "../components/NavigationBar"
import { useNavigate } from "react-router-dom";

export default function searchForm({pets}){
    const [location, setLocation] = useState([]);
    const [animal, setAnimal] = useState([]);
    const [breed, setBreed] = useState([]);

    const navigate = useNavigate();

    pets.forEach((e)=>{
        if(!location.includes(`${e.city}, ${e.state}`)) {
            setLocation([...location, `${e.city}, ${e.state}`]);
        }
        if(!animal.includes(e.animal)) {
            setAnimal([...animal, e.animal]);
        }
        if(!breed.includes(e.breed)) {
            setBreed([...breed, e.breed]);
        }
    });

    const transferToHome = (e)=>{
        e.preventDefault();
        navigate("/home", {state: {location: e.target[0].value, animal: e.target[1].value, breed: e.target[2].value}})
    }

    return (
        <div className="flex flex-col">
            <NavigationBar/>
            <form onSubmit={transferToHome} className="text-xl p-10 self-center flex flex-col">
                <h1 className="text-2xl my-10">Enter details to search</h1>
                {/* location */}
                <label htmlFor="location">Choose Location:</label>
                <select name="location" className="p-1">
                    {
                        location.map((e, i)=>{
                            return (
                                <option key={i} value={e}>{e}</option>
                            )
                        })
                    }
                </select>
                {/* animal */}
                <label htmlFor="animal" className="mt-10">Choose Animal:</label>
                <select name="animal" className="p-1">
                    {
                        animal.map((e, i)=>{
                            return (
                                <option key={i} value={e}>{e}</option>
                            )
                        })
                    }
                </select>
                {/* breed */}
                <label htmlFor="breed" className="mt-10">Choose Breed:</label>
                <select name="breed" className="p-1">
                    {
                        breed.map((e, i)=>{
                            return (
                                <option key={i} value={e}>{e}</option>
                            )
                        })
                    }
                </select>
                <button className="bg-red-200 rounded-lg p-3 mt-10" type="submit">Search</button>
            </form>
        </div>
    )
}