import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';

SingleColor;
const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map((color) => {
        return <SingleColor key={nanoid()} color={color} />;
      })}
    </section>
  );
};
export default ColorList;
