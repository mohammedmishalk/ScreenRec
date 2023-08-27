import React from "react";
import {  DeleteIcon } from "../Components/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/checkout";
function DetailCard({discount}) {
  const { ticketNumberOne, ticketNumberTwo, ticketOneCount, ticketTwoCount } =
    useSelector((state) => state.checkout);

  const finalAmount =
    ticketNumberOne * ticketOneCount + ticketNumberTwo * ticketTwoCount;

  const disptach = useDispatch();

  return (
    <>
      <div className="w-[400px] h-[280px] flex-col justify-start items-start gap-6 flex sm:w-[600px] sm:h-[280px] sm:flex-col sm:justify-start sm:items-start sm:gap-6 sm:flex">
        <div className="self-stretch h-[104px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-6 flex-col justify-start items-start gap-2 flex">
            <div className="w-100 grow shrink basis-0 text-neutral-950 text-lg font-medium leading-normal">
            boAt Newly Launched Immortal 141 TWS Gaming Earbuds 
            </div>
          </div>
          <div className="w-[350px] justify-between items-center inline-flex sm:w-[600px] sm:justify-between sm:items-center sm:inline-flex">
            <div className="text-neutral-950 text-2xl font-bold leading-loose">
              Rs{ticketNumberOne*ticketOneCount}
            </div>
            <div className="justify-center items-center gap-6 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                onClick={() => disptach(decrement({ ticketNumber: "TicketNumberOne" }))}
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  id="Vector"
                  d="M10.8 10.8H13.2H18V13.2H13.2H10.8H6V10.8H10.8ZM12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24ZM12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4C9.45392 2.4 7.01212 3.41143 5.21178 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 14.5461 3.41143 16.9879 5.21178 18.7882C7.01212 20.5886 9.45392 21.6 12 21.6Z"
                  fill="#2D71F2"
                />
              </svg>

              <div className="text-blue-600 text-base font-semibold leading-normal">
                {ticketOneCount}
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                onClick={() => disptach(increment({ ticketNumber: "TicketNumberOne" }))}
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  id="Vector"
                  d="M10.8 10.8V6H13.2V10.8H18V13.2H13.2V18H10.8V13.2H6V10.8H10.8ZM12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24ZM12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4C9.45392 2.4 7.01212 3.41143 5.21178 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 14.5461 3.41143 16.9879 5.21178 18.7882C7.01212 20.5886 9.45392 21.6 12 21.6Z"
                  fill="#2D71F2"
                />
              </svg>
            </div>
          </div>
          <div className="h-4 relative">
            <DeleteIcon />
            <div className="left-[24px] top-0 absolute text-red-500 text-sm font-normal leading-none">
              Delete
            </div>
            <div className="w-4 h-4 left-0 top-0 absolute flex-col justify-start items-start inline-flex" />
          </div>
        </div>
        {/* <div className="w-[200px] h-[0px] border border-zinc-200 sm:w-[600px] sm:h-[0px] sm:border sm:border-zinc-200"></div>
        <div className="w-[350px] h-[104px] flex-col justify-start items-start gap-4 flex sm:self-stretch sm:h-[104px] sm:flex-col sm:justify-start sm:items-start sm:gap-4 sm:flex">
          <div className="self-stretch h-6 flex-col justify-start items-start gap-2 flex">
            <div className="w-60 text-neutral-950 text-lg font-medium leading-normal">
              Ticket Number 2 Name
            </div>
          </div> */}
          {/* <div className="self-stretch justify-between items-center inline-flex sm:w-[600px] sm:justify-between sm:items-center sm:inline-flex">
            <div className="text-neutral-950 text-2xl font-bold leading-loose">
              ${ticketNumberTwo*ticketTwoCount}
            </div>
            <div className="justify-center items-center gap-6 flex">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                onClick={() => disptach(decrement({ ticketNumber: "TicketNumberTwo" }))}
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  id="Vector"
                  d="M10.8 10.8H13.2H18V13.2H13.2H10.8H6V10.8H10.8ZM12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24ZM12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4C9.45392 2.4 7.01212 3.41143 5.21178 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 14.5461 3.41143 16.9879 5.21178 18.7882C7.01212 20.5886 9.45392 21.6 12 21.6Z"
                  fill="#2D71F2"
                />
              </svg>
              <div className="text-blue-600 text-base font-semibold leading-normal">
                {ticketTwoCount}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                onClick={() => disptach(increment({ ticketNumber: "TicketNumberTwo" }))}
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  id="Vector"
                  d="M10.8 10.8V6H13.2V10.8H18V13.2H13.2V18H10.8V13.2H6V10.8H10.8ZM12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24ZM12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4C9.45392 2.4 7.01212 3.41143 5.21178 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 14.5461 3.41143 16.9879 5.21178 18.7882C7.01212 20.5886 9.45392 21.6 12 21.6Z"
                  fill="#2D71F2"
                />
              </svg>
            </div>
          </div>
          <div className="h-4 relative">
            <DeleteIcon />
            <div className="left-[24px] top-0 absolute text-red-500 text-sm font-normal leading-none">
              Delete
            </div>
            <div className="w-4 h-4 left-0 top-0 absolute flex-col justify-start items-start inline-flex" />
          </div>
        </div>
        <div className="w-[200px] h-[0px] border border-zinc-200  sm:w-[600px] sm:h-[0px] sm:border sm:border-zinc-200"></div> */}
      </div>
      <div className="self-stretch h-8 flex-col justify-start items-start gap-6 flex">
        <div className="w-[150] justify-between items-center gap-6 inline-flex sm:self-stretch sm:justify-between sm:items-center sm:gap-6 sm:inline-flex">
          <div className="w-60 flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-60 text-neutral-950 text-lg font-medium leading-normal">
              Total
            </div>
          </div>
          <div className="text-neutral-950 text-2xl font-bold leading-loose">
            {discount > 0 ? (
              <>
                Rs {(parseFloat(finalAmount) - parseFloat(discount)).toFixed(2)}
                <span className="text-red-500"> (Discount: Rs{discount.toFixed(2)})</span>

              </>
            ) : (
              `Pay ${finalAmount.toFixed(2)}`
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCard;
