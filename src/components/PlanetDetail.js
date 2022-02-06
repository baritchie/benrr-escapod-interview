import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function PlanetDetail(props) {
  const [allResidents, setAllResidents] = useState([])
  const [isLoading, setIsLoading] = useState({ ...props.isLoading })
  const params = useParams()
  const url = params.planet.replace("-", " ")
  const planets = props.planets
  const index = planets.findIndex((o) => o.name.toLowerCase() === url)
  useEffect(() => {
    if (planets.length > 0) {
      const getResidents = async () => {
        const results = await Promise.all(
          planets[index].residents.map((url) =>
            fetch(url).then((res) => res.json())
          )
        )
        setAllResidents(results)
        setIsLoading(false)
      }
      getResidents()
    }
  }, [planets, index])
  function render() {
    if (isLoading && planets.length > 0) {
      return (
        <>
          <p className='my-10 text-center text-2xl'>Loading</p>
        </>
      )
    } else if (!isLoading && planets.length > 0) {
      return (
        <section>
          <h1 className='mb-10 border-2 border-white py-4'>
            {planets[index].name}
          </h1>
          {allResidents.length > 0 ? (
            <h2>Residents</h2>
          ) : (
            <h2>There are no residents.</h2>
          )}
          <div className='w-full border-t-2 border-white'></div>
          <section>
            <ul className='mx-auto flex w-2/3 flex-wrap gap-y-10 py-10 text-center'>
              {allResidents.map((resident, index) => {
                return (
                  <div key={index} className='flex-grow basis-1/3'>
                    <li>
                      <Link
                        to={{
                          pathname: `/people/${resident.name
                            .replace(/\W+/g, "-")
                            .toLowerCase()}`,
                        }}
                      >
                        {resident.name}
                      </Link>
                    </li>
                  </div>
                )
              })}
            </ul>
          </section>
          <section>
            <h2>Characteristics</h2>
            <div className='w-full border-t-2 border-white'></div>
            <div className='mx-auto grid w-2/3 grid-cols-3 gap-y-10 pt-4 text-center'>
              <div>
                <h3>Diameter</h3>
                <p>
                  {planets[index].diameter.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  )}{" "}
                  km
                </p>
              </div>
              <div>
                <h3>Population</h3>
                <p>
                  {planets[index].population.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  )}
                </p>
              </div>
              <div>
                <h3>Surface Water</h3>
                <p>{planets[index].surface_water}%</p>
              </div>
              <div>
                <h3>Orbital Period</h3>
                <p>{planets[index].orbital_period} Days</p>
              </div>
              <div>
                <h3>Rotation Period</h3>
                <p>{planets[index].rotation_period} Days</p>
              </div>
              <div>
                <h3>Gravity</h3>
                <p>{planets[index].gravity} Gs</p>
              </div>
            </div>
          </section>
        </section>
      )
    }
  }
  return <>{render()}</>
}
