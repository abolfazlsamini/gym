import { useCallback, useEffect, useState } from '@lynx-js/react';

import './App.css';
import arrow from './assets/arrow.png';
import lynxLogo from './assets/lynx-logo.png';
import reactLynxLogo from './assets/react-logo.png';
import image1 from './assets/image1.gif';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import { Navbar } from './Navbar.jsx';

export function App() {
  const [data, setData] = useState<string | undefined>();

  useEffect(() => {
    console.log('Hello, ReactLynx');
  }, []);

  // const onTap = useCallback(() => {
  //   'background-only';
  //   setAlterLogo(!alterLogo);
  // }, [alterLogo]);

  interface ListItemSnapAlignment {
    factor: number;
    offset: number;
  }
  const scrol: ListItemSnapAlignment = { factor: 0, offset: 0 };

  const [storedValue, setStoredValue] = useState<string>('asdasd');

  const setStorage = () => {
    NativeModules.NativeLocalStorageModule.setStorageItem(
      'testKey',
      'Hello, ReactLynx!',
    );
    getStorage();
  };

  const getStorage = () => {
    const value =
      NativeModules.NativeLocalStorageModule.getStorageItem('testKey');
    setStoredValue(value ?? '');
  };
  return (
    <page>
      <view className="App w-full h-full">
        <Navbar />
        <list
          scroll-orientation="vertical"
          item-snap={scrol}
          className=" w-full h-full "
        >
          <list-item item-key={'0'} key={'0'} className="border border-white">
            <view className="h-[80vh] relative">
              <image src={image1} className="block w-full h-full" />
              <view class="absolute bottom-0 left-0 border border-white w-full">
                <view className="bg-[#68656594] py-20">
                  <text className="text-black">{data}</text>
                  <input
                    type="text"
                    placeholder="text"
                    onChange={(e) => setData(e.target.value)}
                    className="text-xl text-[#fff] h-52 w-full"
                  />
                </view>
              </view>
            </view>
          </list-item>
          <list-item item-key={'1'} key={'1'} className="border border-white">
            <view className="h-[80vh]">
              <image src={image2} className="block w-full h-full" />
            </view>
            <text className="text-white">sdfsdf</text>
          </list-item>
          <list-item item-key={'2'} key={'2'} className="border border-white">
            <view className="h-[80vh]">
              <image src={image2} className="block w-full h-full" />
            </view>
            <text className="text-white">sdfsdf</text>
          </list-item>
        </list>
      </view>
    </page>
  );
}
