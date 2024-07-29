import { useLocation } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import NavigationBar from "../components/NavigationBar";
import PetList from "../components/PetList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PetDetails() {
    const [pets, setPets] = useState([]);
    const locate = useLocation();

    useEffect(()=>{
        axios.get('http://pets-v2.dev-apis.com/pets').then(e=>setPets(e.data.pets));
        setPets(pets.filter((e)=>e.id !== locate.state.pet.id));
    }, []);

    return (
        <div>
            <NavigationBar/>
            {/* About pet */}
            <div className="flex p-5 h-[27rem] items-center my-20">
                <div className="border border-gray-400 p-2 rounded-2xl relative shadow-xl">
                    <div className="flex flex-col absolute">
                        <div className="w-7 h-7 bg-gray-500 rounded-3xl my-2"></div>
                        <div className="w-7 h-7 bg-gray-500 rounded-3xl my-2 shadow-inner"></div>
                    </div>
                    <Carousel className="w-[27rem] h-[27rem] bg-gray-200 ml-20 rounded-xl">
                        {
                            locate.state.pet.images.map((e, i)=>{
                                return (
                                    <img key={i} src={e} alt="images" className="w-[27rem]"/>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className="flex flex-col p-20 text-2xl ">
                    <span>Name: {locate.state.pet.name}</span><br />
                    <span>Animal: {locate.state.pet.animal}</span><br />
                    <span>Breed: {locate.state.pet.breed}</span><br />
                    <span>Location: {locate.state.pet.city}, {locate.state.pet.state}</span>
                </div>
            </div>
            <PetList petsInfo={pets}/>
        </div>
    )
}