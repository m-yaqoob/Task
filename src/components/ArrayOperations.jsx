import React from 'react';

const ArrayOperations = () => {
  const originalArray = [1, 2, 3, 4, 5];
  const mappedArray = originalArray.map((element) => element * 2);
  const slicedArray = originalArray.slice(1, 4);
  const filteredArray = originalArray.filter((element) => element % 2 === 0);
  return (
    <>
      <h2>Mapped Array:</h2>
        {mappedArray.map((element, index) => (
          <tr key={index}>{element}</tr>
        ))}
      <h2>Sliced Array:</h2>
        {slicedArray.map((element, index) => (
          <tr key={index}>{element}</tr>
        ))}
      <h2>Filtered Array (Even Numbers):</h2>
        {filteredArray.map((element, index) => (
          <tr key={index}>{element}</tr>
        ))}
    </>
  );
};

export default ArrayOperations;
