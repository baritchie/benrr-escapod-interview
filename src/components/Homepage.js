import { Link } from "react-router-dom";
export default function Homepage() {
    return (
            <main className="w-5/6 mx-auto">
                <h1>Homepage</h1>
                <section className="flex flex-wrap justify-around mt-10">
                    <Link to="/planets">
                    <div className="py-20 px-16 border-white border-2 bg-tatooine bg-contain transition-all duration-150 hover:scale-110">
                        <h2>
                            Planets
                        </h2>
                    </div>
                    </Link>
                    <Link to="/people">
                    <div className="py-20 px-16 border-white border-2 bg-darth bg-contain transition-all duration-150 hover:scale-110">
                        <h2>
                            People
                        </h2>
                    </div>
                    </Link>
                </section>
            </main>
    );
}
