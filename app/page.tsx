
import CustomFilter from "@components/CustomFilter";
import Hero from "@components/Hero";
import SearchBar from "@components/SearchBar";
import Image from "next/image";
import { fetchCars } from "../util/index";
import CarCars from "@components/CarCars";

export default async function Home() {
  const allCars = await fetchCars();
  const DataEmpty=!Array.isArray(allCars)||allCars.length<1||!allCars

  return (
    <main className="overflow-hidden ">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Export the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!DataEmpty?(<section>
          <div className="home__cars-wrapper">
            {allCars?.map((car)=>(
              <CarCars key={car} car={car}/>)
            )}
          </div>
        </section>):(<div className="home__error-container">
          <h2 className="text-black text-xl font-bold">oops,no results</h2>
          <p>{allCars?.message}</p>
        </div>)}
      </div>
    </main>
  );
}
