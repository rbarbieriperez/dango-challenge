import React from "react";

export default function Product({ product, productSelected }) {

  /**
   * Handles product click
   */
  const handleProductClick = () => {
    if (!productSelected) return;
    productSelected(product?.productId);
  }

  return (
    <>
      <div className="min-w-[9.625rem] lg:p-[1.125rem_0.9375rem_1.125rem_1.125rem] min-h-[15rem] lg:w-full lg:h-full max-w-[13.9375rem] max-h-[20.25rem] flex flex-col items-center rounded-[1.25rem] shadow-[3px_3px_9px_0_rgba(0,0,0,0.25)] m-auto">
        <img
          className="mt-[0.813rem] lg:mt-0 lg:w-[12.0625rem]"
          src={product?.image}
          alt="product"
        />
        <div className="lg:flex lg:justify-between lg:w-full xsm:pb-[0.875rem] lg:pb-0">
          <p className="text-base/[2.5rem] xsm:text-center">${product?.price}</p>
          <button onClick={handleProductClick} className="bg-customGreen text-white rounded-full w-[6.125rem] h-[1.625rem] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-[-.3rem] lg:mt-0 lg:self-center">
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
}
