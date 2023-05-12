import * as React from "react"
import {Link} from "gatsby"
import Navbar from "./Navbar"
import Sidebar from "./sidebar";

const Layout = ({location, title, children}) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let header

    if (isRootPath) {
        header = (
            <h1 className="main-heading">
                <Link to="/">{title}</Link>
            </h1>
        )
    } else {
        header = (
            <Link className="header-link-home" to="/">
                {title}
            </Link>
        )
    }

    return (
        <div className="global-wrapper" data-is-root-path={isRootPath}>
            <div className="content-wrapper">
                <header className="global-header">
                    <Navbar/>
                    {header}
                </header>
                <main>{children}</main>
                <hr/>
                <footer>
                    © {new Date().getFullYear()}, Built without any writing or proofreading help by AI or LLMs

                    {` `}
                </footer>

            </div>
            <Sidebar/>
        </div>
    )
}

export default Layout
