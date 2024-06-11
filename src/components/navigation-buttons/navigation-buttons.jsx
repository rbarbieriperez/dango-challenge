import ArrowLeft from '../../assets/arrow-left.svg';
import ArrowRight from '../../assets/arrow-right.svg';

export default function NavigationButtons({ onNext, onPrev }) {
  return <>
    <div className='flex'>
      <button className='swiper-button-prev border-2 border-customGreen rounded-full w-[2.563rem] h-[1.938rem]' onClick={onPrev && onPrev()}>
        <img className='m-auto' src={ArrowLeft} alt="Back" />
      </button>

      <button className='swiper-button-next bg-customGreen rounded-full w-[2.563rem] h-[1.938rem] ml-1.5' onClick={onNext && onNext()}>
        <img className='m-auto' src={ArrowRight} alt="Next" />
      </button>
    </div>
  </>;
}