import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  departments: [
        { "id": 1, "title": "İnsan Kaynakları" },
        { "id": 2, "title": "Pazarlama" },
        { "id": 3, "title": "Teknik Mimari" },
        { "id": 4, "title": "Krediler" }
      ],
  employees: [
    {
        "id": 1,
        "fullname": "Ahmet Çelik",
        "email": "deneme@gmail.com",
        "maritalStatus": "Evli",
        "department":"İnsan Kaynakları",
        "departmentId": 1
    },
    {
      "id": 2,
      "fullname": "Çelik Ahmet",
      "email": "deneme@outlook.com",
      "maritalStatus": "Bekar",
      "department":"Pazarlama",
      "departmentId": 2
    },
    {
      "id": 3,
      "fullname": "Deneme Kullanıcısı",
      "email": "deneme@outlook.com",
      "maritalStatus": "Bekar",
      "department":"Teknik Mimari",
      "departmentId": 3
    },
    {
      "id": 4,
      "fullname": "Test Kullanıcısı",
      "email": "test@gmail.com",
      "maritalStatus": "Evli",
      "department":"Teknik Mimari",
      "departmentId": 3
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addEmployee(employee) {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee
    });
  }

  function editEmployee(employee) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employee
    });
  }

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        departments:state.departments,
        addEmployee,
        editEmployee,
        removeEmployee
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};