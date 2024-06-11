import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import HighlightedProduct from "../highlighted-product/highlighted-product";
import NavigationButtons from "../navigation-buttons/navigation-buttons";

export default function HighlightedProducts({ products }) {
  return (
    <>
      <section className="h-[42.813rem] bg-cover bg-no-repeat bg-highlightedProduct relative xl:block xl:pt-[4.125rem] xl:pl-[7.375rem] xl:pr-[7.625rem] xl:h-fit xl:pb-[3.9375rem]">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={`highlighted-product-swiper-${index}`}>
              <div className="flex flex-col items-center box-border">
                <HighlightedProduct
                  product={product}
                  key={`highlighted-product-${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-fit absolute bottom-[1rem] left-1/2 transform  -translate-x-1/2 xl:bottom-[35%] xl:left-[10rem] z-10">
          <NavigationButtons />
        </div>
      </section>
    </>
  );
}
