import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import usePagination from "./Pagination";
import { default as data } from "./db.json";

import { GlobalContext } from '../context/GlobalState';

export const EmployeeList = () => {
  const { employees, removeEmployee } = useContext(GlobalContext);
  let [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  // return (
  //   <React.Fragment>
  //     {employees.length > 0 ? (
  //       <React.Fragment>
  //         {employees.map((employee) => (

  //           <div
  //             className="flex items-center bg-blue-100 mb-3 shadow"
  //             key={employee.id}
  //           >
  //             <div className="flex-auto text-left px-4 py-2 m-2">
  //               <p className="text-gray-900 leading-none" >
  //                 İsim Soyisim : {employee.fullname}
  //               </p>
  //               <p className="text-gray-600">
  //                 E-Posta : {employee.email}
  //               </p>
  //               <span className="inline-block text-sm font-semibold mt-1">
  //                 Medeni Durum : {employee.maritalStatus}
  //               </span>
  //               <p className="text-gray-600">
  //                Departman : {employee.department}
  //               </p>
  //             </div>
  //             <div className="flex-auto text-right px-4 py-2 m-2">
  //               <Link
  //                 to={`/edit/${employee.id}`}
  //                 title="Düzenle"
  //               >
  //                 <div className=" hover:bg-gray-400 text-yellow-400 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
  //                 </div>
  //               </Link>
  //               <button
  //                 onClick={() => removeEmployee(employee.id)}
  //                 className="block hover:bg-gray-400 text-red-400 font-semibold py-2 px-4 rounded-full inline-flex items-center"
  //                 title="Sil"
  //               >
  //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
  //               </button>
  //             </div>
  //           </div>
  //         ))}
  //       </React.Fragment>
  //     ) : (
  //       <p className="text-center bg-gray-100 text-green-600 py-5">No data.</p>
  //     )}
  //   </React.Fragment>
  // );
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Ad Soyad
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    E-posta
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Medeni Durum
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Departman
                  </th>
                  <th  scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Düzenle
                  </th>
                  <th  scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                   >
                    Sil
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {employees.map((employee) => (
                  <tr key={employee.id}>

                    <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{employee.fullname}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{employee.email}</div>              
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.maritalStatus}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{employee.department}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                       to={`/edit/${employee.id}`}
                       title="Düzenle"
                      >
                      <div className=" hover:bg-gray-400 text-yellow-400 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      </div>
                      </Link>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => removeEmployee(employee.id)}
                          className="block hover:bg-gray-400 text-red-400 font-semibold py-2 px-4 rounded-full inline-flex items-center"
                          title="Sil"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                    </td>                      
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br></br>
      <Pagination  page={page} onChange={handleChange}  count={5} variant="outlined" color="primary"  />
    </div>
  );
};