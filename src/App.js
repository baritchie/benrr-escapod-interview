import {
    Routes,
    Route,
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Nav from "./components/Nav"
import Homepage from "./components/Homepage";
import Planets from "./components/Planets";
import PlanetDetail from "./components/PlanetDetail";
import People from "./components/People"
import PersonDetail from "./components/PersonDetail"

function App() {
    const getAllPlanets = useRef([])
    const getAllPeople = useRef([])
    const [allPlanets, setAllPlanets] = useState([])
    const [allPeople, setAllPeople] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchPlanets = async () => {
            const baseUrl = `https://swapi.dev/api/planets/?page=`
            let page = 1
            let finalResult = []
            do {
                try {
                    const response = await fetch(`${baseUrl}${page}`)
                    const data = await response.json()
                    finalResult = data
                    getAllPlanets.current = [...getAllPlanets.current, ...finalResult.results]
                    page++
                    if (finalResult.next === null) {
                        setIsLoading(false)
                        setAllPlanets(getAllPlanets.current)
                    }
                } catch (err) {
                console.log(`Error ${err}`)
                }
            } while (finalResult.next !== null)
        }
        fetchPlanets()
        const fetchPeople = async () => {
            const baseUrl = `https://swapi.dev/api/people/?page=`
            let page = 1
            let finalResult = []
            do {
                try {
                    const response = await fetch(`${baseUrl}${page}`)
                    const data = await response.json()
                    finalResult = data
                    getAllPeople.current = [...getAllPeople.current, ...finalResult.results]
                    page++
                    if (finalResult.next === null) {
                        setIsLoading(false)
                        setAllPeople(getAllPeople.current)
                    }
                } catch (err) {
                console.log(`Error ${err}`)
                }
            } while (finalResult.next !== null)
        }
        fetchPeople()
    }, [])

    return (
        <div className="wrapper bg-black min-h-screen text-white pb-20">
            <Nav />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="planets" element={<Planets planets={allPlanets} isLoading={isLoading} />} />
                <Route path="planets/:planet" element={<PlanetDetail planets={allPlanets} isLoading={isLoading} />} />
                <Route path="people" element={<People people={allPeople} isLoading={isLoading} />} />
                <Route path="people/:person" element={<PersonDetail people={allPeople} isLoading={isLoading} />} />
            </Routes>
        </div>
    );
}

export default App;
