import chevronLeft from './assets/icons/ChevronLeft.svg';

export function Navbar() {
  return (
    <view className="bg-black w-full h-16 flex items-center px-4">
      <image src={chevronLeft} className="w-8 h-8" />
      <text className="text-white"></text>
    </view>
  );
}
