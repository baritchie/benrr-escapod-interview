import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function PlanetDetail(props) {
    const [allResidents, setAllResidents] = useState([])
    const [isLoading, setIsLoading] = useState({...props.isLoading})
  const params = useParams()
  const url = params.planet.replace("-", " ")
  const planets = props.planets
  const index = planets.findIndex((o) => o.name.toLowerCase() === url)
  useEffect(() => {
    if (planets.length > 0) {
      const getResidents = async () => {
        const results = await Promise.all(
          planets[index].residents.map((url) => fetch(url).then((res) => res.json()))
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
            <p className="text-2xl text-center my-10">Loading</p>
        </>
      )
    } else if (!isLoading && planets.length > 0) {
      return (
        <section>
        <h1 className="mb-10 border-2 border-white py-4">{planets[index].name}</h1>
          {allResidents.length > 0 ? (
            <h2>Residents</h2>
          ) : (
            <h2>There are no residents.</h2>
          )}
        <div className="border-white w-full border-t-2"></div>
          <section>
            <ul className="text-center flex flex-wrap w-2/3 mx-auto gap-y-10 py-10">
                {allResidents.map((resident, index) => {
                return (
                    <div key={index} className="basis-1/3 flex-grow">
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
                );
                })}
            </ul>
          </section>
          <section>
                <h2>Characteristics</h2>
                <div className="border-white w-full border-t-2"></div>
                <div className="text-center grid grid-cols-3 w-2/3 mx-auto gap-y-10 pt-4">
                    <div>
                        <h3>Diameter</h3>
                        <p>{planets[index].diameter} km</p>
                    </div>
                    <div>
                        <h3>Population</h3>
                        <p>{planets[index].population}</p>
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
                        <h3>Rotational Period</h3>
                        <p>{planets[index].rotational_period} Days</p>
                    </div>
                    <div>
                        <h3>Gravity</h3>
                        <p>{planets[index].gravity} Gs</p>
                    </div>
                </div>
            </section>
        </section>
      );
    }
  }
  return <>{render()}</>;
}
