import { useState, useEffect} from "react";


const url = `https://6edeayi7ch.execute-api.us-east-1.
amazonaws.com/v1/examen/employees/luis_dominguez`

const useGetter = () => {
  const [employeesList ,setEmployeesList] = useState([])

  useEffect(()=> {
    fetch(url)
    .then(async response => {
      const result = await response.json(response);
      // console.log('result: ', result);
      setEmployeesList(result.data.employees);
    });
  }, []);
  
  return employeesList; 
}

export default useGetter;
