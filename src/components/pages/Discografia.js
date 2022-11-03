import React from 'react';
import Discos from '../discos/Discos';
import Info from '../info/Info';
import Coverdiscografia from '../cover/Coverdiscografia';

const Discografia = () => {
  return(
    <>
      <Coverdiscografia />
      <Discos />
      <Info />
    </>
  );
}

export default Discografia;
