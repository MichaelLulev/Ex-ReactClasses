import { NavLink } from "react-router-dom"



export function AppHeader() {

    return (
        <header className="app-header">
            <nav className="app-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/animal">Animal</NavLink>
                <NavLink to="/clock">Clock</NavLink>
                <NavLink to="/count">Count</NavLink>
                <NavLink to="/watcher">Watcher</NavLink>
            </nav>
        </header>
    )
}