import { useContext } from 'react';
import { ColorContext } from './Provider/color-context';

const ComponentA = () => {
  const colorCtx = useContext(ColorContext);
  const { selectedColor, onColorChange } = colorCtx;
  return (
    <div>
      <h1 style={{ color: selectedColor }}> Hello World </h1>
      <button onClick={() => onColorChange('green')}>Change to green</button>
      <button onClick={() => onColorChange('blue')}>Change to blue</button>
    </div>
  );
};

export default ComponentA;
