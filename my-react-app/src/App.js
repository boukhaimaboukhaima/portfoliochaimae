import React, { useState, useEffect } from 'react';
import Navbar from './components/Navrab';
import LoadingPage from './components/loadingpage';
import { usePointerPosition } from './components/usePointerPosition';
import { useDelayedValue } from './components/useDelayedValue';
import Body from './components/Body';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Entering loading state...');
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Replace this with your actual loading logic
      await new Promise((resolve) => setTimeout(resolve, 2500));

      // Set loading to false when finished loading
      setLoading(false);
      console.log('Exiting loading state...');
    };

    fetchData();
  }, []); // Run this effect only once on mount

  console.log('Rendering App component...');

  const Canvas = () => {
    const pos1 = usePointerPosition();
    const pos2 = useDelayedValue(pos1, 100);
    const pos3 = useDelayedValue(pos2, 100);
    const pos4 = useDelayedValue(pos3, 100);

    return (
      <>
        <Dot position={pos1} opacity={0.8} />
        <Dot position={pos2} opacity={0.8} />
        <Dot position={pos3} opacity={0.6} />
        <Dot position={pos4} opacity={0.4} />
      </>
    );
  };

  const Dot = ({ position, opacity }) => (
    <div
      style={{
        position: 'absolute',
        backgroundColor: '#dedbd2',
        borderRadius: '50%',
        opacity: 0.3,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }}
    />
  );

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        // Render the main content of your app
        <>
          <Navbar />
          {/* Include the Canvas component */}
          <Canvas />
          {/* Other components go here */}
          <Body />
        </>
      )}
    </div>
  );
};

export default App;
