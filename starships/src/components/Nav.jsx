import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav">
            <Link to="/"> Home </Link>
               
            <Link to="/StarshipList"> Starship List </Link>
             
        </div>
    )
}