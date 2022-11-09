import React from "react";
import { Heading } from "./Heading";
import { EmployeeList } from "./EmployeeList";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <h3 className="text-center text-2xl mt-20 text-base leading-8 text-blue-600 font-bold tracking-wide uppercase">
          Personel Listeleme Uygulaması
        </h3>
        <Heading />
        <EmployeeList />
      </div>
    </React.Fragment>
  );
};