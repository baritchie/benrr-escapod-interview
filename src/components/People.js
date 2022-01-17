import { useState, useEffect } from "react";
import {
    Link,
    Outlet
  } from "react-router-dom";
export default function People(props) {
    // Props
    let isLoading = props.isLoading
    let allPeople = props.people

    // States
    const [currentPage, setCurrentPage] = useState(1)
    const [renderPeople, setRenderPeople] = useState([])
    const [renderPageNumbers, setRenderPageNumbers] = useState()

    // Paginate
    const perPage = 12
    const indexOfLast = currentPage * perPage
    const indexOfFirst = indexOfLast - perPage

    const handleClick = (e) => {
        e.preventDefault();
        setCurrentPage(e.target.id)
    }

    useEffect(() => {
        let pageNumbers = []
        if (allPeople.length > 0) {
            const currentPeople = (allPeople.slice(indexOfFirst, indexOfLast))
            for (let i = 1; i <= Math.ceil(allPeople.length / perPage); i++) {
                pageNumbers.push(i)
            }
            setRenderPeople(
                currentPeople.map((person, index) => {
                    return (
                        <div key={index} className="flex flex-wrap basis-1/4 justify-center py-4">
                            <h3>
                                <Link 
                                    to={`/people/${person.name.replace(/\W+/g, '-').toLowerCase()}`}
                                    state={index}
                                >{person.name}</Link>
                            </h3>
                        </div>
                    )
                }))
             setRenderPageNumbers(pageNumbers.map(number => {
                return (
                    <li className="pagination-item" key={number} id={number} onClick={(e) => handleClick(e)}>
                        {number}
                    </li>
                )
            }))
        }
    }, [allPeople, indexOfFirst, indexOfLast])

    function render() {
        if (isLoading) {
            return (
                <>
                    <h1 className="mb-10">People of the Star Wars Universe</h1>
                    <p className="text-2xl text-center my-10">Loading</p>
                </>
            )
        } else {
            return (
                <>
                <h1 className="mb-10">People of the Star Wars Universe</h1>
                <main className="w-3/4 mx-auto">
                    <section className="flex flex-wrap justify-center">
                        {renderPeople}
                    </section>
                    <section className="flex justify-center mt-10">
                        <ul className="inline-flex flex-wrap">
                            {renderPageNumbers}
                        </ul>
                    </section>
                </main>
                <Outlet />
                </>
            )
        }
        }
  return (
      <>
        {render()}
      </>
  )
}