import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./components/Nav"
import Homepage from "./components/Homepage";
import Planets from "./components/Planets";
import PlanetDetail from "./components/PlanetDetail";
import People from "./components/People"
import PersonDetail from "./components/PersonDetail"

function App() {
    const [allPlanets, setAllPlanets] = useState([])
    const [allPeople, setAllPeople] = useState([])

    useEffect(() => {
        const fetchPlanets = async () => {
            let response = await fetch("https://swapi.dev/api/planets/")
            let data = await response.json()
            console.log(data.results)
            setAllPlanets(data.results)
        }
        fetchPlanets()
        const fetchPeople = async () => {
            let response = await fetch("https://swapi.dev/api/people/")
            let data = await response.json()
            console.log(data.results)
            setAllPeople(data.results)
        }
        fetchPeople()
    }, [])

    return (
        <div className="wrapper bg-black h-screen text-white">
            <Nav />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="planets" element={<Planets planets={allPlanets} />} />
                <Route path="planets/:planet" element={<PlanetDetail planets={allPlanets} />} />
                <Route path="people" element={<People people={allPeople} />} />
                <Route path="people/:person" element={<PersonDetail people={allPeople} />} />
            </Routes>
        </div>
    );
}

export default App;
