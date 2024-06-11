import React from "react";
import trash from "../../assets/trash.svg";

export default function Cart({
  products,
  productsInCart,
  visible,
  onClose,
  onDeleteItem,
}) {
  const [totalAmount, setTotalAmount] = React.useState(0);

  /**
   * Send delete item index
   * @param {Number} index
   */
  const handleDeleteItem = (index) => {
    if (!onDeleteItem) return;
    onDeleteItem(index);
  };

  React.useEffect(() => {
    setTotalAmount(() => {
      return productsInCart.reduce((acc, curr) => {
        acc += products.find((p) => p.productId === curr).price;
        return acc;
      }, 0);
    });
  }, [productsInCart]);

  return (
    <>
      <div
        className={`${
          visible ? "block" : "hidden"
        } xsm:w-full xsm:h-full z-10 fixed top-[50%] pb-3 left-[50%] bg-white sm:w-[50%] sm:h-[60%] translate-y-[-50%] translate-x-[-50%] `}
      >
        <div className="flex h-[80%] flex-col overflow-y-scroll">
          {productsInCart.map((prod, key) => {
            const product = products.find((p) => p.productId === prod);
            return (
              <div className="flex p-4 justify-around" key={`cart-item-${key}`}>
                <img
                  className="w-[4rem]"
                  src={product?.image}
                  alt="product"
                />
                <div className="flex flex-col w-[70%]">
                  <p>{product?.title}</p>
                  <p>{product?.description}</p>
                  <p>{product?.price}</p>
                </div>
                <img
                  onClick={() => handleDeleteItem(key)}
                  className="w-6 cursor-pointer"
                  src={trash}
                  alt="delete item"
                />
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-0 w-full pb-6">
          <p className="text-center mb-2">Total: ${totalAmount}</p>
          <button
            className="w-[10rem] h-[3rem] bg-customGreen block m-auto text-white rounded-full"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
}
