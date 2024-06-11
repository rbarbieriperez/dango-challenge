import React from "react";
import Product from "../product/product";
import NavigationButtons from '../navigation-buttons/navigation-buttons';

export default function FeaturedCollection({ products, productSelected }) {
  const [totalPages, setTotalPages] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedProducts, setSelectedProducts] = React.useState([]);


  React.useEffect(() => {
    setTotalPages(Math.ceil(products.length / 8));
  }, [products]);

  React.useEffect(() => {
    const startIndex = currentPage === 1 ? 0 : (currentPage - 1) * 8;
    setSelectedProducts(products.slice(startIndex, startIndex + 8));
  }, [currentPage]);

  /**
   * Go to next page based on the total pages
   */
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev  + 1);
    }
  }

  /**
   * Return to previous page based on the total pages
   */
  const prevPage = () => {
    if (currentPage > totalPages - 1) {
      setCurrentPage(prev => prev - 1);
    }
  }

  /**
   * Send selected product id
   * @param {Number} productId
   */
  const handleProductSelected = (productId) => {
    if (!productSelected) return;
    productSelected(productId);
  }

  return <>
    <section>
      <h1 className="font-bold text-[1.813rem] text-customGreen/[.58] text-center mt-[3.188rem]">Featured Collection</h1>

      <div className="grid grid-cols-1 mt-[2.75rem] gap-x-6 gap-y-[1.875rem] xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:max-w-[59.4375rem] lg:m-auto lg:grid-cols-4 ml-[1.3125rem] mr-[1.375rem] box-border">
        { selectedProducts.map((product, index) =>  <Product productSelected={handleProductSelected} product={product} key={`product-${index}`}/>) }
      </div>

      <div className="flex justify-center mt-[3.375rem] mb-10">
        <NavigationButtons onNext={() => nextPage} onPrev={() => prevPage}/>
      </div>
    </section>
  </>;
}