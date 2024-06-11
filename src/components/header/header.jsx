// SVGS

import cart from '../../assets/cart.svg';


// COMPONENTS

import MenuButton from '../menu-button/menu-button';


export default function Header({ openCart }) {
  return (
    <>
      <header className="w-full">
        <div className="bg-customGreen font-inter font-normal h-6 flex justify-center">
          <p className="text-white text-[0.688rem] self-center">30% OFF ALL ORDERS UNTIL 4/27</p>
        </div>

        <div className='xsm:hidden xl:flex h-[4.375rem] items-center'>
          <nav className="flex justify-around w-[35.5rem] m-auto mt-[2rem] text-customGreen">
            <a className='font-bold border-b-[5px] w-[4.375rem] text-center border-customGreen' href="#">HOME</a>
            <a className='w-[4.375rem] text-center' href="#">ITEM 1</a>
            <a className='w-[4.375rem] text-center' href="#">ITEM 2</a>
            <a className='w-[4.375rem] text-center' href="#">ITEM 3</a>
            <a className='w-[4.375rem] text-center' href="#">ITEM 4</a>
            <a className='w-[4.375rem] text-center' href="#">ITEM 5</a>
          </nav>
          <img className='mr-[1.555rem] w-10 float-right cursor-pointer' src={cart} alt="cart button" onClick={openCart} />
        </div>

        <div className="xl:hidden 2xl:hidden flex w-full justify-between h-[3.188rem]">
          <MenuButton/>
          <img onClick={openCart} className='mr-1 w-10' src={cart} alt="cart button" />
        </div>
      </header>
    </>
  );
}
