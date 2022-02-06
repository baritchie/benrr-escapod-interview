import { useEffect, useRef, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function PersonDetail(props) {
  const [homeworld, setHomeworld] = useState("")
  const [isLoading, setIsLoading] = useState({ ...props.isLoading })
  const params = useParams()
  const url = params.person
  const people = props.people
  const index = useRef()
  useEffect(() => {
    if (people.length > 0) {
      const namesArray = []
      function newArray() {
        people.forEach((person) => {
          namesArray.push(person)
        })
      }
      newArray()
      function result() {
        namesArray.map(({ name }) => {
          let newName = name.replace(/\W+/g, "-").toLowerCase()
          if (newName.includes(url)) {
            index.current = people.findIndex((a) => a.name === name)
            return true
          } else return false
        })
      }
      result()
      const getHomeworld = async () => {
        const results = await fetch(people[index.current].homeworld).then(
          (res) => res.json()
        )
        return setHomeworld(results)
      }
      getHomeworld()
      setIsLoading(false)
    }
  }, [people, url])
  function render() {
    if (isLoading && homeworld === "") {
      return (
        <>
          <p className='my-10 animate-spin text-center text-2xl'>Loading</p>
        </>
      )
    } else if (homeworld !== "" && !isLoading) {
      return (
        <>
          <h1 className='mb-10 border-2 border-white py-4'>
            {people[index.current].name}
          </h1>
          <section className='mb-10 text-center'>
            <h2>Homeworld</h2>
            <div className='w-full border-t-2 border-white'></div>
            <Link
              to={{
                pathname: `/planets/${homeworld.name
                  .replace(/\W+/g, "-")
                  .toLowerCase()}`,
              }}
            >
              <h3 className='pt-10'>{homeworld.name}</h3>
            </Link>
          </section>
          <section>
            <h2>Characteristics</h2>
            <div className='w-full border-t-2 border-white'></div>
            <div className='mx-auto grid w-2/3 grid-cols-3 gap-y-10 pt-4 text-center'>
              <div>
                <h3>Birth Year</h3>
                <p className='capitalize'>{people[index.current].birth_year}</p>
              </div>
              <div>
                <h3>Gender</h3>
                <p className='capitalize'>{people[index.current].gender}</p>
              </div>
              <div>
                <h3>Hair Color</h3>
                <p className='capitalize'>{people[index.current].hair_color}</p>
              </div>
              <div>
                <h3>Skin Color</h3>
                <p className='capitalize'>{people[index.current].skin_color}</p>
              </div>
              <div>
                <h3>Eye Color</h3>
                <p className='capitalize'>{people[index.current].eye_color}</p>
              </div>
              <div>
                <h3>Height</h3>
                <p>{people[index.current].height} cm</p>
              </div>
            </div>
          </section>
        </>
      )
    }
  }
  return <>{render()}</>
}
