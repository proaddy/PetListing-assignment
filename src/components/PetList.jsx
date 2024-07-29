import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PetList({petsInfo}){

    const nagivate = useNavigate();
    const transferDetails = (petdetail)=>{
        nagivate("/petdetail", {state: {pet: petdetail}});
    }
    return (
        <>
            <div id="cards" className="w-[99%] flex flex-wrap relative">
                {
                    petsInfo.length > 0 ?
                    petsInfo.map((e, i)=>{
                        return(
                            <div onClick={()=>transferDetails(e)} key={i} className="w-64 p-3 mx-auto my-2 cursor-pointer border border-gray-200">
                                <img src={e.images[0]} alt="dog" />
                                <span>Name: {e.name}</span><br />
                                <span>Breed: {e.breed}</span>
                            </div>
                        )
                    }) : 
                    <h1 className="text-5xl absolute top-[48%] left-1/2 -translate-x-2/4 p-2 rounded-lg">No result found</h1>
                }
            </div>
        </>
    )
}