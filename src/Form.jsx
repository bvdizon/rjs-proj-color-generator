import { useState } from 'react';

const Form = ({ addColor }) => {
  // Set the initial color to an empty string
  const [color, setColor] = useState('');

  // Define a function to handle the form submission
  const handleSubmit = (e) => {
    // Prevent the default behavior of the form submission
    e.preventDefault();
    // Call the addColor function with the current color
    addColor(color);
  };

  return (
    <section className='container'>
      <h4>color generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        {/* Color input to select a color */}
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        {/* Text input to enter a color value */}
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
        />
        <button
          type='submit'
          className='btn'
          style={{ backgroundColor: color }}>
          Generate
        </button>
      </form>
    </section>
  );
};
export default Form;
