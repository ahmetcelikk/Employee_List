import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const EditEmployee = (route) => {
  let history = useHistory();

  const { employees, editEmployee,departments } = useContext(GlobalContext);

  const [selectedUser, setSelectedUser] = useState({
    id: null,
    fullname: "",
    email: "",
    maritalStatus: "",
    departmentId:null,
    department:"",
  });

  const currentUserId = route.match.params.id;

  useEffect(() => {
    const employeeId = currentUserId;
    const selectedUser = employees.find(
      (currentEmployeeTraversal) => currentEmployeeTraversal.id === parseInt(employeeId)
    );
    setSelectedUser(selectedUser);
  }, [currentUserId, employees]);

  const onSubmit = (e) => {
    e.preventDefault();
    editEmployee(selectedUser);
    history.push("/");
  };

  const handleOnChange = (userKey, newValue) =>
    setSelectedUser({ ...selectedUser, [userKey]: newValue });

  if (!selectedUser || !selectedUser.id) {
    return <div>Invalid Employee ID.</div>;
  }

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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.fullname}
              onChange={(e) => handleOnChange("name", e.target.value)}
              type="text"
              placeholder="Ad ve Soyad giriniz"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              E-Posta
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.email}
              onChange={(e) => handleOnChange("email", e.target.value)}
              type="text"
              placeholder="E-posta giriniz"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="maritalStatus"
            >
              Medeni Durum
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.maritalStatus}
              onChange={(e) => handleOnChange("maritalStatus", e.target.value)}
              type="text"
              placeholder="Medeni Durum Giriniz"
            />
          </div>

          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="department"
            >
              Departman Bilgisi
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.department}
              onChange={(e) => handleOnChange("department", e.target.value)}
              type="text"
              placeholder="Departman Bilgisi Giriniz"
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-yellow-300 w-full hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Personel Düzenle
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