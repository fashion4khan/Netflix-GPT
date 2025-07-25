import React from 'react';

const Header = () => {
  return (
    <div className="absolute flex top-0 justify-between left-0 w-full px-8 py-4 bg-gradient-to-b from-black z-10">
      <img
        className="w-44 md:w-52"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo-img"
      />
      <button type='button'>
        <span className='border-2 white text-white py-2 px-6 m-12 rounded-md'>English</span>
        <span className='text-white bg-red-600 py-2 px-4 m-12 rounded-md'>Sign in</span>
      </button>
    </div>
  );
};

export default Header;
