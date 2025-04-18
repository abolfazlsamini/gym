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

  useEffect(() => {}, []);

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
  useEffect(() => {
    getStorage();
  }, []);
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
    setData(value ?? '');
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
                <view className="py-20 bg-[#16161650]">
                  <text className="text-black">{data}</text>
                  <input
                    type="text"
                    placeholder="text"
                    bindinput={(e) => setData(e.detail.value)} // intentional error 😊
                    className="text-xl bg-[#68656594]  text-[#fff] h-10 w-full border border-black"
                  />
                  <text
                    className="bg-orange w-max rounded-xl my-2 mx-1 text-black"
                    bindtap={() => setStorage()} //setStorage (neet to add Native Platform)
                  ></text>
                  <text
                    className="bg-blue w-max rounded-xl my-2 mx-1 text-black"
                    bindtap={() => {
                      getStorage();
                    }} //getStorage (neet to add Native Platform)
                  ></text>
                </view>
              </view>
            </view>
          </list-item>
          <list-item item-key={'1'} key={'1'} className="border border-white">
            <view className="h-[80vh]">
              <image src={image2} className="block w-full h-full" />
            </view>
            <text className="text-white">ssss</text>
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
