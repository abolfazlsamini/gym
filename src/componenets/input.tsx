import { useRef, useEffect, useState } from '@lynx-js/react';
import plusIcon from '../assets/icons/PlusCircle.svg';
import minusIcon from '../assets/icons/MinusCircle.svg';

interface CustomComponentProps {
  data: number;
  showDefaultValue: boolean;
  increment: number;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

export function Input({
  data, //the data from Parent's useState
  setData, //the setData from Parent's useState
  showDefaultValue,
  increment = 0.5,
}: CustomComponentProps) {
  const [isHoldingPlus, setIsHoldingPlus] = useState(false); //TODO combine two useState to one?
  const [isHoldingMinus, setIsHoldingMinus] = useState(false);
  const [count, setCount] = useState(data);
  const [isActive, setIsActive] = useState(false);

  function activateHandler() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let holdTimerPlus: any = null;
    let holdTimerMinus: any = null;
    if (isHoldingMinus) {
      holdTimerMinus = setInterval(() => {
        setCount((prevCount) => prevCount - increment);
      }, 100);
    }
    if (isHoldingPlus) {
      holdTimerPlus = setInterval(() => {
        setCount((prevCount) => prevCount + increment);
      }, 100);
    }
    // useLynxGlobalEventListener('exposure', (e) => {
    //   console.log('exposure', e);
    // });
    return () => {
      // Cleanup on unmount
      if (holdTimerPlus) {
        clearInterval(holdTimerPlus);
      }
      if (holdTimerMinus) {
        clearInterval(holdTimerMinus);
      }
    };
  }, [isHoldingPlus, isHoldingMinus]);
  useEffect(() => {
    setData(count); //useEffect to update value on parent component
  }, [count]);

  return (
    <view>
      <view className="p-1" bindtap={() => setIsActive(!isActive)}>
        <text
          className={
            isActive
              ? 'bg-blue px-5 py-2 rounded-xl text-2xl min-w-12 text-black'
              : 'bg-gray px-5 py-2 rounded-xl text-2xl min-w-12 text-white'
          }
        >
          {showDefaultValue ? data : ''}
        </text>
        <view
          className={
            isActive
              ? 'absolute -right-8 top-1/2  rounded-[100%] text-6xl -translate-yy'
              : 'hidden'
          }
        >
          <view
            bindtouchstart={() => {
              setCount((prevData) => prevData + increment);
              setIsHoldingPlus(true);
            }}
            bindtouchend={() => setIsHoldingPlus(false)}
          >
            <image src={plusIcon} className="w-14 h-14" />
          </view>
        </view>
        <view
          className={
            isActive
              ? 'absolute -left-8 top-1/2  rounded-[100%] text-6xl -translate-yy'
              : 'hidden'
          }
          bindtouchstart={() => {
            setCount((prevData) => prevData - increment);
            setIsHoldingMinus(true);
          }}
          bindtouchend={() => setIsHoldingMinus(false)}
        >
          <image src={minusIcon} className="w-14 h-14" />
        </view>
      </view>
    </view>
  );
}
