import { Link } from "react-router-dom";
export default function Homepage() {
    return (
            <main>
                <h1>Homepage</h1>
                <section className="flex flex-wrap justify-evenly mt-10 gap-y-10 md:gap-y-0">
                    <Link to="/planets" className="hover:no-underline hover:text-white">
                    <div className="flex items-center justify-center w-52 h-52 md:h-full md:w-auto hover:shadow-home md:py-20 md:px-16 border-white border-2 bg-tatooine bg-cover transition-all duration-150 hover:scale-105">
                        <h2>
                            Planets
                        </h2>
                    </div>
                    </Link>
                    <Link to="/people" className="hover:no-underline hover:text-white">
                    <div className="flex items-center justify-center w-52 h-52 md:h-full md:w-auto hover:shadow-home md:py-20 md:px-16 border-white border-2 bg-darth bg-cover transition-all duration-150 hover:scale-105">
                        <h2>
                            People
                        </h2>
                    </div>
                    </Link>
                </section>
            </main>
    );
}
