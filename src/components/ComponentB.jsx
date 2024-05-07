import { useContext } from 'react';
import { ColorContext } from './Provider/color-context';

const ComponentB = () => {
  const colorCtx = useContext(ColorContext);
  const { selectedColor, onColorChange } = colorCtx;

  return (
    <>
      <div
        style={{ width: '100%', height: 500, background: selectedColor }}
      ></div>
      <h3>Selected Color : {selectedColor}</h3>
      <button onClick={() => onColorChange('blue')}>Switch to blue </button>
    </>
  );
};

export default ComponentB;
