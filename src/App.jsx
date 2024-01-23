import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { AnimalPage } from "./pages/AnimalPage"
import { ClockPage } from "./pages/ClockPage"
import { CountPage } from "./pages/CountPage"
import { MousePage } from "./pages/MousePage"
import { WatcherPage } from "./pages/WatcherPage"
import { AppHeader } from "./cmps/AppHeader"



export function App() {

    return (
        <section className="app">
            <AppHeader />
            <main className="main-page">
                <Routes>
                    <Route path="/"        element={<HomePage    />} />
                    <Route path="/animal"  element={<AnimalPage  />} />
                    <Route path="/clock"   element={<ClockPage   />} />
                    <Route path="/count"   element={<CountPage   />} />
                    <Route path="/mouse"   element={<MousePage   />} />
                    <Route path="/watcher" element={<WatcherPage />} />
                </Routes>
            </main>
        </section>
    )
}