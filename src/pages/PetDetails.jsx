import { useLocation } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { useRef } from 'react';

import NavigationBar from "../components/NavigationBar";
import PetList from "../components/PetList";

export default function PetDetails({pets}) {
    const locate = useLocation();
    const eleRef = useRef(null);
    const focusOnTop = ()=>{
        eleRef.current.focus();
    }
    return (
        <div className="flex flex-col">
            <NavigationBar/>
            {/* About pet */}
            <div className="flex md:flex-row flex-col p-5 h-[27rem] items-center my-10 md:my-16">
                <div className="border border-gray-400 p-2 rounded-2xl relative shadow-xl md:ml-auto">
                    <div className="flex flex-col absolute">
                        <div ref={eleRef} tabIndex='0' className="w-7 h-7 bg-gray-500 rounded-3xl my-2"></div>
                        <div className="w-7 h-7 bg-gray-500 rounded-3xl my-2"></div>
                    </div>
                    <Carousel onChange={focusOnTop} className="w-[18rem] h-[18rem] md:w-[20rem] md:h-[20rem] lg:w-[27rem] lg:h-[27rem] bg-gray-200 md:ml-16 rounded-xl">
                        {
                            locate.state.pet.images.map((e, i)=>{
                                return (
                                    <img key={i} src={e} alt="images" className="w-full h-full"/>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className="flex flex-col p-6 text-xl md:p-8 lg:p-20 md:text-2xl md:mr-auto">
                    <span><strong>Name:</strong> {locate.state.pet.name}</span><br />
                    <span><strong>Animal:</strong> {locate.state.pet.animal}</span><br />
                    <span><strong>Breed:</strong> {locate.state.pet.breed}</span><br />
                    <span><strong>Location:</strong> {locate.state.pet.city}, {locate.state.pet.state}</span>
                </div>
            </div>
            <hr className="border border-gray-200 w-[96%] self-center mb-2"/>
            <PetList petsInfo={pets}/>
        </div>
    )
}