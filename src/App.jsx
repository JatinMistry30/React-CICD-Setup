import React, { useState } from 'react';

const App = () => {
  // Declare a state variable to store the count
  const [count, setCount] = useState(0);

  // Function to handle button click and increment the count
  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Welcome to Vite</h1>
      <p>Count: {count}</p> {/* Display the count */}
      <button onClick={onClick}>Click me</button> {/* Attach the onClick handler */}
    </div>
  );
};

export default App;
