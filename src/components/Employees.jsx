import {useState, useEffect } from 'react'

//const baseURL = "https://nodejs-mysql-restapi-production-9a95.up.railway.app/api/employees/";
const baseURL = "http://localhost:3300/api/employees";

//const baseURL = "https://rickandmortyapi.com/api/character/";


export const Employees = () => {
  const [employees, setEmployees] = useState([])

  const getEmployees = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
//    setEmployees(data.results);
    setEmployees(data);
  };


  useEffect(() => {
    getEmployees();
  }, []);
  return (
    <div className="Employees">
      {employees.map(employee =>(
        <h2>{employee.name}</h2>
      ))}
    </div>
  )
}