import { useEffect, useState } from 'react'
import "./index.css"

declare global {
  interface Window {
      Telegram: any;
  }
}

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready();
  }, [])
  
  const onClose = () => {
    tg.close()
  }
  const [count, setCount] = useState(0)
  const [energy, setEnergy] = useState(1000)

  function addCount() {
    if((energy - 5) >= 0){
      setEnergy(energy-5)
      setCount(count+5)
    }
  }

  return (
    <div className="w-full flex p-4 h-[100dvh] flex-col justify-between">
      <div className="w-full flex justify-between">
        <div className="text-[42px] font-bold">
          DZB TOKEN
        </div>
        <button onClick={() => onClose()}  className="border-2 font-bold px-[20px] py-[10px] rounded-3xl">
          CEO
        </button>
      </div>
      <div className="w-full text-center text-[32px] font-semibold">
        Кол-во: {count}
      </div>
      <div className="w-full flex justify-center items-center">
        <div onClick={() => addCount()} className="border-2 cursor-pointer flex justify-center items-center rounded-[100%] w-[100px] h-[100px] font-bold">
          DZB
        </div>
      </div>
      <div className='w-full'>
        <div className="w-full h-[10px] border-[2px] rounded-3xl">
          <div style={{
            width: `calc((100% / 1000) * ${energy})`
          }} className="bg-orange-500 h-full rounded-3xl">
          </div>
        </div>
        <div>1000/{energy}</div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex w-[250px] justify-center">
          <div className="cursor-pointer font-semibold border-2 p-[10px] text-[18px]">
            Профиль
          </div>
          <div className="cursor-pointer font-semibold border-2 p-[10px] text-[18px]">
            Профиль
          </div>
          <div className="cursor-pointer font-semibold border-2 p-[10px] text-[18px]">
            Профиль
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
