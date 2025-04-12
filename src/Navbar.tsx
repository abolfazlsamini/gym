import { useNavigate } from 'react-router';

import arrow from './assets/arrow.png';

export function Navbar() {
  const nav = useNavigate();
  function backbutton() {
    nav('/home');
  }
  return (
    <view className="bg-black w-full h-20 flex items-center px-4">
      <image
        src={arrow}
        className="w-6 h-6 -rotate-90"
        bindtap={() => backbutton()}
      />
      <text className="text-white"></text>
    </view>
  );
}
