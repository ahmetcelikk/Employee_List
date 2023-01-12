import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const AddEmployee = () => {
  let history = useHistory();

  const { addEmployee, employees,departments } = useContext(GlobalContext);
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [department, setDepartmant] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: employees.length + 1,
      fullname,
      email,
      maritalStatus,
      department,
    };
    addEmployee(newEmployee);
    history.push("/");
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
             Ad Soyad
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={fullname}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Ad ve Soyad giriniz"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              E-Posta
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="E-posta giriniz"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="maritalStatus"
            >
              Medeni Durum
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              type="text"
              placeholder="Medeni Durum Giriniz"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="department"
            >
              Departman Bilgisi
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={department}
              onChange={(e) => setDepartmant(e.target.value)}
              type="text"
              placeholder="Departman Bilgisi Giriniz"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-blue-600 w-full hover:text-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Personel Ekle
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Vazgeç</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
