import React, { useState } from "react";

const Faq = () => {
  const [openMenu, setOpenMenu] = useState("Menu 1");

  const menus = [
    {
      title: "What services does tifi.tv offer",
      description:
        "Tifi.tv offers a wide range of services, including video editing, content creation, motion graphics, color grading, animation, and more. Our goal is to bring your creative vision to life through visual storytelling.",
    },
    {
      title: "Do you provide custom solutions for unique projects",
      description:
        "Tifi.tv offers a wide range of services, including video editing, content creation, motion graphics, color grading, animation, and more. Our goal is to bring your creative vision to life through visual storytelling.",
    },
    {
      title: "How can I get started with your services?",
      description:
        "Tifi.tv offers a wide range of services, including video editing, content creation, motion graphics, color grading, animation, and more. Our goal is to bring your creative vision to life through visual storytelling.",
    },
    {
      title: "Can you provide pricing information for your services?",
      description:
        "Tifi.tv offers a wide range of services, including video editing, content creation, motion graphics, color grading, animation, and more. Our goal is to bring your creative vision to life through visual storytelling.",
    },
    {
      title: "What is the typical process when working with tifi.tv?",
      description:
        "Tifi.tv offers a wide range of services, including video editing, content creation, motion graphics, color grading, animation, and more. Our goal is to bring your creative vision to life through visual storytelling.",
    },
    {
      title: "Can I see examples of your previous work?",
      description:
        "Tifi.tv offers a wide range of services, including video editing, content creation, motion graphics, color grading, animation, and more. Our goal is to bring your creative vision to life through visual storytelling.",
    },
    {
      title: "Do you have any case studies or success stories to share?",
      description:
        "Tifi.tv offers a wide range of services, including video editing, content creation, motion graphics, color grading, animation, and more. Our goal is to bring your creative vision to life through visual storytelling.",
    },
    {
      title: "What sets tifi.tv apart from other agencies?",
      description:
        "Tifi.tv offers a wide range of services, including video editing, content creation, motion graphics, color grading, animation, and more. Our goal is to bring your creative vision to life through visual storytelling.",
    },
  ];

  const toggleMenu = (title) => {
    setOpenMenu(title);
    console.log("ok");
  };

  return (
    <div className="lg:px-[160px] -mt-[90px] lg:mt-0 px-[10px] pb-[96px]">
      <h1 className="text-center text-[#1D2939] font-Red-Hat text-[30px] sm:text-[64px] font-semibold pb-[48px] ">
        FAQ
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {menus.map((menu, index) => (
          <div key={index} className="p-[24px] rounded-[8px] bg-[#F2F4F7]">
            <div className="flex flex-row items-center justify-between">
              <h3 className="sm:font-bold font-medium text-[#1D2939] font-noto-sans lg:text-[22px] ">
                {menu.title}
              </h3>
              <button
                onClick={() => toggleMenu(menu.title)}
                className={
                  openMenu === menu.title
                    ? "sm:text-[30px] text-[15px] bg-[#FF601F] w-[42px] h-[42px] flex items-center justify-center rounded-[8px] text-white"
                    : "text-[30px] bg-[#EAECF0] w-[42px] h-[42px] flex items-center justify-center rounded-[8px] text-[#101828]"
                }
              >
                {openMenu === menu.title ? "-" : "+"}
              </button>
            </div>

            {openMenu === menu.title && (
              <p className="text-[#34405] font-noto-sans text-[16px] sm:text-[18px] font-normal leading-[30px] pt-[16px]">
                {menu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
