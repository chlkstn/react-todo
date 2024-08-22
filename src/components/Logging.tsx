import  { useEffect } from 'react';

const HelloComponent: React.FC = () => {
  useEffect(() => {
    console.log('hello');
  }, []); // The empty array ensures this runs only once after the initial render

  return (
    <div>
      <p>This is a simple React component.</p>
    </div>
  );
};

export default HelloComponent;
