import React from 'react';
import FlatArrowRightGreen from "../../assets/flat-arrow-right-green.svg";
import FlatArrowRight from "../../assets/flat-arrow-right.svg";

export default function HighlightedProduct({ product }) {

  return (
    <>
      <div className="xl:grid xl:grid-cols-2 xl:m-auto xl:gap-x-[15.25rem]">
        <img
          className="rounded-[0.625rem] w-full mt-[1.438rem] max-w-[30.5625rem] xl:order-2"
          src={product?.image}
          alt="product"
        />

        <div className="text-center xl:order-1 xl:text-left xl:mt-[12%] h-fit">
          <h1 className="text-[2.313rem] max-w-[16.875rem] m-auto xl:m-0 text-customGreen mt-[1rem] leading-[2.594rem] xl:text-[3.75rem] xl:max-w-full xl:leading-[3.75rem] xl:line-clamp-2 xl:elipsis">
            {product?.title}
          </h1>

          <p className="hidden xl:block text-customGreen xl:mt-[1.25rem]">{product?.description}</p>

          <div className="xl:flex xl:flex-row xl:gap-x-[1.25rem] xl:mt-[1.25rem]">
            <button className="m-auto xl:m-0 bg-customGreen rounded-md mt-[1.313rem] pl-2 w-[11.5rem] lg:p-0 lg:font-bold lg:w-[13.938rem] h-[3.563rem] text-white text-[0.813rem] flex justify-center items-center">
              SHOP NOW
              <img className="ml-10" src={FlatArrowRight} alt="Arrow Right" />
            </button>

            <p className="mt-[1.438rem] xl:hidden">TAKE THE QUIZ</p>

            <button className="hidden m-auto xl:m-0 xl:flex border-customGreen text-customGreen border-2 rounded-md mt-[1.313rem] w-[13.938rem] h-[3.563rem] text-[0.813rem] flex justify-center items-center">
              TAKE THE QUIZZ
              <img
                className="ml-[1.625rem]"
                src={FlatArrowRightGreen}
                alt="Arrow Right"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
