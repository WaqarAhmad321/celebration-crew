"use client";

import React from "react";

type NumberOfPersonsProps = {
  nPersons: number;
  setNPersons: (value: number) => void;
};

const NumberOfPersons: React.FC<NumberOfPersonsProps> = ({
  nPersons,
  setNPersons,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNPersons(Number(event.target.value));
  };

  return (
    <div className="px- w-full py-5">
      <div className=" max-w-xl">
        <label htmlFor="nPersons" className="text-lg text-primary-green">
          <span className="font-old text-primary-gren block sm:inline">
            Number of Persons: {nPersons} - Rs.{" "}
            {nPersons <= 5 ? "Free" : (nPersons - 5) * 100}
          </span>
        </label>

        <input
          type="range"
          min="1"
          max="50"
          step="1"
          value={nPersons}
          id="budget"
          name="budget"
          onChange={handleChange}
          className="rounded-ful h-2 w-full  accent-purple-600"
        />
      </div>
    </div>
  );
};

export default NumberOfPersons;
