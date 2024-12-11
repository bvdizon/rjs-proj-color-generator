import Values from 'values.js';
import ColorList from './ColorList';
import Form from './Form';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Initialize state with color shades for yellow
  const [colors, setColors] = useState(new Values('#FFFF00').all(10));

  // Function to add a new color and update state with its shades
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
