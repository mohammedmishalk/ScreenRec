import React from 'react'
import { ArrowDown } from "../Components/Buttons";
function PaymentCard() {
  return (
    <div className="left-[760px] top-[328px] absolute flex-col justify-start items-start gap-6 inline-flex">
          <div className="h-20 flex-col justify-start items-start gap-4 flex">
            <div className="text-gray-400 text-base font-medium leading-none">
              Payment method
            </div>
            <div className="w-[649px] px-4 py-3.5 bg-white rounded-[5px] border border-blue-600 justify-between items-center gap-[279px] inline-flex">
            <div className="flex items-center gap-3">
  <label className="flex items-center gap-2 cursor-pointer" style={{ whiteSpace: 'nowrap' }}>
    <input
      type="radio"
      name="paymentMethod"
      value="creditCard"
      className="w-4 h-4 border border-blue-600 rounded-full cursor-pointer appearance-none checked:bg-blue-600 checked:border-blue-600"
    />
    <span className="text-gray-800 text-sm font-semibold leading-none">
      Credit/Debit Card
    </span>
  </label>
  <div className="ml-[460px]">
    <ArrowDown  />
  </div>
</div>


              <div className="w-5 h-5 relative" />
            </div>
          </div>
          <div className="w-[649px] h-[318px] py-6 bg-white rounded-sm border border-blue-600 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch h-12 flex-col justify-start items-center gap-6 flex">
              <div className="self-stretch px-6 justify-between items-center gap-[202px] inline-flex">
                <div className="w-[351.70px] text-zinc-800 text-lg font-bold leading-normal">
                  Credit card
                </div>
                <div className="justify-end items-start gap-3 flex">
                  <img
                    className="w-[32.67px] h-6"
                    src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1690113922/cards_1_xqgme0.png"
                  />
                  <img
                    className="w-[32.67px] h-6"
                    src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1690113994/cards_3_i2695f.png"
                  />
                  <img
                    className="w-[32.67px] h-6"
                    src="https://res.cloudinary.com/dvekmmxxx/image/upload/v1690113994/cards_3_i2695f.png"
                  />
                </div>
              </div>
              <div className="self-stretch h-[0px] border border-neutral-200"></div>
            </div>
            <div className="self-stretch h-[87px] px-6 flex-col justify-start items-start gap-[7px] flex">
  <label className="self-stretch text-zinc-800 text-lg font-normal leading-normal">
    Card number
  </label>
  <input
    type="text"
    className="self-stretch px-3.5 py-4 bg-white rounded border border-neutral-200"
    placeholder="0000 0000 0000 0000"
  />
</div>
<div className="self-stretch px-6 justify-start items-start gap-4 inline-flex">
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex">
    <label className="self-stretch text-zinc-800 text-lg font-normal leading-normal">
      Name on card
    </label>
    <input
      type="text"
      className="self-stretch h-14 bg-white rounded border border-neutral-200"
    
    />
  </div>
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex">
    <label className="self-stretch text-zinc-800 text-lg font-normal leading-normal">
      Expiry date
    </label>
    <input
      type="text"
      className="self-stretch px-[13px] py-4 bg-white rounded border border-neutral-200"
      placeholder="MM/YY"
    />
  </div>
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex">
    <label className="self-stretch justify-start items-center gap-3 inline-flex">
      <span className="text-zinc-800 text-lg font-normal leading-normal">
        CVV code
      </span>
      <div className="w-[18px] h-[18px] relative" />
    </label>
    <input
      type="text"
      className="self-stretch h-14 bg-white rounded border border-neutral-200"
      placeholder="123"
    />
  </div>
</div>

          </div>
        </div>
  )
}

export default PaymentCard
