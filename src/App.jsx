import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { AnimalPage } from "./pages/AnimalPage"
import { ClockPage } from "./pages/ClockPage"
import { CountPage } from "./pages/CountPage"
import { MousePage } from "./pages/MousePage"
import { WatcherPage } from "./pages/WatcherPage"
import { AppHeader } from "./cmps/AppHeader"
import { Component } from "react"
import { Switch } from "react-router-dom"


export class App extends Component {
    render() {
        return (
            <section className="app">
                <AppHeader />
                <main className="main-page">
                    <Switch>
                        <Route path="/"        component={HomePage   } />
                        <Route path="/animal"  component={AnimalPage } />
                        <Route path="/clock"   component={ClockPage  } />
                        <Route path="/count"   component={CountPage  } />
                        <Route path="/mouse"   component={MousePage  } />
                        <Route path="/watcher" component={WatcherPage} />
                    </Switch>
                </main>
            </section>
        )
    }
}