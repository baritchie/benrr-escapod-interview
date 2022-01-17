import {
    Link,
    Outlet
  } from "react-router-dom";
export default function People(props) {
    let isLoading = props.isLoading
    let allPeople = props.people
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
                    <section className="flex flex-wrap">
                    {allPeople.map((person, id) => (
                        <div key={id} className="flex flex-wrap basis-1/3 justify-center py-4">
                            <h3>
                                <Link 
                                    to={`/people/${person.name.replace(/\W+/g, '-').toLowerCase()}`}
                                    state={id}
                                >{person.name}</Link>
                            </h3>
                        </div>
                    ))}
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