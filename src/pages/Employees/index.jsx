import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useGetter from "../../hooks/useGetter";
import Table from 'react-bootstrap/Table'
import { TitleH1 } from "../styles/Titles";
import searchIcon from '../../resources/images/search-icon-5.png';


const Container = styled.div`
  padding: 0 5%;
  background-color: beige;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
`;

const Td = styled.td`
  text-align: center;
`;

const Search = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  background-color: lightgrey;
  border-radius: 5px;
  margin: 1.2rem 0;
  padding: 0 3% 0 7.5%;
  input {
    width: 100%;
    height: 3rem;
    background-color: transparent;
    border: none;
    outline: none;
  }
  img {
      width: 2.5rem;
      margin: 0 auto;
    }
`;

const Employees = () => {
  const employees = useGetter();
  // console.log('employees',employees);
  const [ currentPage, setCurrentPage] = useState(0);
  const [ employeesList, setEmployeesList] = useState([]);
  const [ counter, setCounter] = useState(10);

  useEffect(()=>{
    if(employees.length > 0) {
      setEmployeesList(employees);
    }
  },[employees]);

  useEffect(()=>{
    console.log('employeesList',employeesList);
  },[employeesList]);

  useEffect(()=>{
    console.log('counter',counter);
  },[counter]);

  const filteredEmployees = () => {
    return employeesList.slice(currentPage, currentPage+10);
  }

  const nextPage = () => {
    setCurrentPage(currentPage+10);
    if(counter < employeesList.length) {
      setCounter(counter=>(counter+10));
    }
  }

  const previewPage = () => {
    if(currentPage <= 0) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage-10);
      if(counter > 10) {
        setCounter(counter=>(counter-10));
      }
    }
  }

  const searchHandle = (value) => {
    const searchEmployees = employees.filter((employee) => {
      return employee.name.toLowerCase().includes(value.toLowerCase()) || employee.last_name.toLowerCase().includes(value.toLowerCase());
    });
    console.log('searchEmployees: ', searchEmployees);
    setEmployeesList(searchEmployees);
  }

  return (
    <Container>
      <TitleH1>Employees</TitleH1>
      <Filter>
        <Search>
          <input 
            type="text" 
            placeholder='search...'
            onChange = {(e) => {searchHandle(e.target.value)}}
          />
          <img src={searchIcon} alt="searchIcon" />
        </Search>
      </Filter>
      <br />
      <h2>Employees table</h2>
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredEmployees().map((employee) => {
              return (
                <tr key={employee.id}>
                  <Td>{employee.id}</Td>
                  <Td>{employee.name}</Td>
                  <Td>{employee.last_name}</Td>
                  <Td>{employee.birthday}</Td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
      <br />
      <div>
        <button 
          className="btn btn-primary"
          onClick={ previewPage }
        >
          Preview
        </button>
        &nbsp;
        {
          counter <= employeesList.length
          &&
          <button 
            className="btn btn-primary"
            onClick={ nextPage }
          >
            next
          </button>
        }
      </div>
    </Container>
  )
  
}

export default Employees;