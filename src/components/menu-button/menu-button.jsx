import line from '../../assets/line.svg';

export default function MenuButton({ onClick }) {
  return <>
    <div onClick={onClick && onClick()} className='flex flex-col w-10 gap-y-1 justify-center items-center'>
      <img className='w-6' alt='menu icon' src={line}/>
      <img className='w-6' alt='menu icon' src={line}/>
      <img className='w-6' alt='menu icon' src={line}/>
    </div>
  </>
}