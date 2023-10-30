import React, { createContext, useState } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <CounterContext.Provider value={{ counter, handleIncrement, handleDecrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };