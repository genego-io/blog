import React from "react"
import {Link} from "gatsby"


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="content-box">
                <ul>
                    <li>
                        <Link to="/series">Series</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Sidebar