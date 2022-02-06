import { Link } from "react-router-dom"
export default function Homepage() {
  return (
    <main>
      <h1>Homepage</h1>
      <section className='mt-10 flex flex-wrap justify-evenly gap-y-10 md:gap-y-0'>
        <Link to='/planets' className='hover:text-white hover:no-underline'>
          <div className='flex h-52 w-52 items-center justify-center border-2 border-white bg-tatooine bg-cover transition-all duration-150 hover:scale-105 hover:shadow-home md:h-full md:w-auto md:py-20 md:px-16'>
            <h2>Planets</h2>
          </div>
        </Link>
        <Link to='/people' className='hover:text-white hover:no-underline'>
          <div className='flex h-52 w-52 items-center justify-center border-2 border-white bg-darth bg-cover transition-all duration-150 hover:scale-105 hover:shadow-home md:h-full md:w-auto md:py-20 md:px-16'>
            <h2>People</h2>
          </div>
        </Link>
      </section>
    </main>
  )
}
