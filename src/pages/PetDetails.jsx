import { useLocation } from "react-router-dom"

export default function PetDetails() {
    const locate = useLocation();
    return (
        <div>
            {locate.state.pet.name}
        </div>
    )
}