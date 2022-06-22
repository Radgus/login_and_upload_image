import React from 'react';


const StateContext = React.createContext({
  employees: [],
  setEmployees: () => {},
});

export default StateContext;
