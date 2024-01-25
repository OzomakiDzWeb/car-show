"use client";
import { manufacturers } from "../constant/index";
import { SearchManufactrProps } from "@types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";

import React, { useState, Fragment } from "react";

const SearchManfactre = ({
  manufactre,
  setManufactre,
}: SearchManufactrProps) => {
  const [queri, setqueri] = useState("");
  const filterManufactures =
    queri === ""
      ? manufacturers
      : manufacturers.filter((itme) =>
          itme
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(queri.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car-logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer-input"
            placeholder="Volkswagen"
            displayValue={(manufactre: string) => manufactre}
            onChange={(e) => setqueri(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            afterLeave={() => setqueri("")}
          >
            <Combobox.Options>
              {filterManufactures.length === 0 && queri !== "" && (
                <Combobox.Option
                  value={queri}
                  className="search-manufacturer__option"
                >
                    Creat '{queri}'
                </Combobox.Option>
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManfactre;
