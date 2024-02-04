"use client";
import React from "react";
import SearchManfactre from "./SearchManfactre";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      width={40}
      height={40}
      className="object-contain"
      alt="magnifying"
    />
  </button>
);
const SearchBar = () => {
  const [manufactre, setManufactre] = useState("");
  const [model, setmodel] = useState("");
  const router = useRouter();
  const handelSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufactre === "" && model === "") {
      return alert("Please fill in the search bar");
    }
    uodatSearchParms(model.toLocaleLowerCase(), manufactre.toLocaleLowerCase());
  };
  const uodatSearchParms = (model: string, manufactre: string) => {
    const SearchParms = new URLSearchParams(window.location.search);
    if (model) {
      SearchParms.set("model", model);
    } else {
      SearchParms.delete("model");
    }
    if (manufactre) {
      SearchParms.set("manufacturer", manufactre);
    } else {
      SearchParms.delete("manufacturer");
    }

    const newPathname = `${window.location.pathname}?${SearchParms.toString()}`;
    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handelSearch}>
      <div className="searchbar__item">
        <SearchManfactre
          manufactre={manufactre}
          setManufactre={setManufactre}
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          width={25}
          height={25}
          alt="icon"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setmodel(e.target.value)}
          placeholder="Tigwan"
          className="searchbar__input"
        />

        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <SearchButton otherClasses={"max-sm:hidden"} />
    </form>
  );
};

export default SearchBar;
