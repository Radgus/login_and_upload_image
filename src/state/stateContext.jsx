import React from 'react';


const StateContext = React.createContext({
  globalState: {
    images:  ['initial.jpg', 'descarga.jpg']
  },
  setGlobalState: () => {},
});

export default StateContext;
