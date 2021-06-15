import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Count: {count}
      </button>
    </>
  );
};

export default Counter;
