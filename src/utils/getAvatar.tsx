import React from 'react';

export const getAvatarRender = (img: string) => {
  return (
    <div className='form-avatar'>
      <img
        src={img}
        alt='planet'
      />
    </div>
  );
};
