import { useState } from '@lynx-js/react';
import '../App.css';
import { Navbar } from '../Navbar.jsx';
import { Input } from '../componenets/input.jsx';
export function Home() {
  const [info, setInfo] = useState({
    height: 160,
    weight: 60,
    age: 30,
    sex: true,
  }); //TODO add other stuff like is it in gym or in home

  return (
    <page className="relative">
      <Navbar />
      <view className="px-10">
        <view className="bg-[#27374D] px-4 ">
          <view className="flex items-center flex-col justify-center">
            <text className="text-xl pb-5 w-max">
              Please enter your info correctly
            </text>

            <text>height (cm):{info.height}</text>
            <Input
              setData={(height: number) => setInfo({ ...info, height: height })}
              data={info.height}
              showDefaultValue={true}
              increment={1}
            />
            <text>weight (kg):{info.weight}</text>
            <Input
              setData={(weight: number) => setInfo({ ...info, weight: weight })}
              data={info.weight}
              showDefaultValue={true}
              increment={0.5}
            />
          </view>
        </view>
      </view>
    </page>
  );
}
