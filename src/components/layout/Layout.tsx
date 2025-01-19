import React from "react"
import { Outlet } from "react-router-dom";
export function Layout(){
    return(
        <React.Fragment>
            <nav className="nav">
                <div className="navList">
                    <ul></ul>
                </div>
            </nav>
            <main>
                <Outlet/>
            </main>
        </React.Fragment>
    )
}