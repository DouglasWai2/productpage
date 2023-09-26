import React, { useState } from 'react';
import './App.css';
import './index.css';
import { Caroussel } from './components/Caroussel';
import { ProductInfo } from './components/ProductInfo';
import { CloseButton } from './components/CloseButton';

const App: React.FC = () => {
  const [desc, setDesc] = useState<boolean | null>(null)    

  function handleClick(): void {
      setDesc(!desc)
  }
  

  return (
    <div className='flex flex-col bg-[#f2f3f2] items-center w-screen'>
      <Caroussel desc={desc} />
      {desc ? <CloseButton handleClick={handleClick} /> : ''}
      <ProductInfo desc={desc} handleClick={handleClick} />
    </div>
  );
}

export default App;
