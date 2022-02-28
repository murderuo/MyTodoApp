import { createContext, useContext, useState } from 'react';

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [list, setList] = useState([{id:Math.floor(Math.random() * 100),todo:'ilk todo',state:false}]);

  const values = { list, setList };

  return <ListContext.Provider value={values}>{children}</ListContext.Provider>;
};

export default ListProvider;

export const useList = () => useContext(ListContext);
