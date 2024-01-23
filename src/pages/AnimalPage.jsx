import { Component } from "react"
import { AnimalList } from "../cmps/AnimalPage/AnimalList"



export class AnimalPage extends Component {
    animals = [
        { type: 'Malayan Tiger', count: 787 },
        { type: 'Mountain Gorilla', count: 212 },
        { type: 'Fin Whale', count: 28 },
    ]
    render() {
        return (
            <section className="animal-page">
                <h2>Animal</h2>
                <AnimalList {...{ animals }} />
            </section>
        )
    }
}