import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  if (
    window.location.pathname.includes("phone") ||
    window.location.pathname.includes("phoneOtp") ||
    window.location.pathname.includes("payment") ||
    window.location.pathname.includes("navaz")
  )
    return;
  return (
    <div
      className="w-full flex-col flex  justify-between bg-white drop-shadow-lg pt-3 "
      dir="rtl"
    >

      <div className="w-full flex justify-between py-2 md:border-b-4">
        <div className="flex flex-col md:justify-center    items-center flex-1 gap-y-3 p-2">
          <img
            src="/logo.svg"
            className=" "
            onClick={() => navigate("/")}
          />
          <span className=" text-gray-700 md:text-xl ">
            خدمة الفحص الفني الدوري
          </span>
        </div>
        <div className="flex-1 flex md:flex-row flex-col items-center justify-center gap-5">
          <span
            className=" cursor-pointer select-none outline-none"
            onClick={() => {
              window.location.reload();
            }}
          >
            English
          </span>{" "}
          <input
            type="text"
            placeholder="بحث"
            className="outline-none text-center md:border-b md:text-2xl md:w-1/12"
          />
        </div>
      </div>
      <div className="border-t border-gray-400 p-3 md:hidden">
        <RxHamburgerMenu
          onClick={() => setActive(!active)}
          className="text-xl"
        />
      </div>
      <div className="hidden md:flex w-full justify-center gap-x-2 py-2">
        <div
          className="flex items-center text-white  gap-x-2 bg-sky-600 px-5 py-5 hover:cursor-pointer "
          onClick={() => navigate("/")}
        >
          <FaHome className="text-xl" />
          <span>الرئيسية</span>
        </div>
        <div className="flex items-center hover:text-white  gap-x-2 hover:bg-sky-600 px-5  hover:cursor-pointer ">
          <span>بنود الفحص الفني الدوري</span>
        </div>
        <div
          className="flex items-center hover:text-white  gap-x-2 hover:bg-sky-600 px-5  hover:cursor-pointer"
          onClick={() => {
            sessionStorage.setItem("session", Date.now());
            navigate("/new-date");
          }}
        >
          <span>حجز موعد</span>
        </div>
        <div className="flex items-center hover:text-white  gap-x-2 hover:bg-sky-600 px-5  hover:cursor-pointer ">
          <span>تعديل موعد</span>
        </div>
        <div className="flex items-center hover:text-white  gap-x-2 hover:bg-sky-600 px-5  hover:cursor-pointer ">
          <span> الغاء موعد</span>
        </div>
        <div className="flex items-center hover:text-white  gap-x-2 hover:bg-sky-600 px-5  hover:cursor-pointer ">
          <span>التحقق من حالة فحص </span>
        </div>
      </div>
      {active ? (
        <div className="bg-white md:hidden flex flex-col">
          <div
            className="flex items-center justify-center text-white  gap-x-2 bg-sky-600 p-5  w-full hover:cursor-pointer "
            onClick={() =>navigate("/")}
          >
            <FaHome className="text-xl" />
            <span>الرئيسية</span>
          </div>
          <div className="flex items-center hover:text-white justify-center  gap-x-2 hover:bg-sky-600 p-5  hover:cursor-pointer ">
            <span>بنود الفحص الفني الدوري</span>
          </div>
          <div
            className="flex items-center hover:text-white justify-center  gap-x-2 hover:bg-sky-600 p-5  hover:cursor-pointer "
            onClick={() => {
              sessionStorage.setItem("session", Date.now());
              navigate("/new-date");
            }}
          >
            <span>حجز موعد</span>
          </div>
          <div className="flex items-center  hover:text-white justify-center  gap-x-2 hover:bg-sky-600 p-5  hover:cursor-pointer ">
            <span>تعديل موعد</span>
          </div>
          <div className="flex items-center justify-center hover:text-white  gap-x-2 hover:bg-sky-600 p-5  hover:cursor-pointer ">
            <span> الغاء موعد</span>
          </div>
          <div className="flex items-center justify-center hover:text-white  gap-x-2 hover:bg-sky-600 p-5  hover:cursor-pointer ">
            <span>التحقق من حالة فحص </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
