import * as React from "react"
import {Link} from "gatsby"
import './style/navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/archives">Archives</Link>
                    </li>
                    <li className="hidden">
                        <Link to="/series">Series</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
