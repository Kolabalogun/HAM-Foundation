import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

interface AccordionProps {
  title: string | undefined;
  content: string | undefined;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded mb-2">
      <div
        className="bg-gray-100 p-4 flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <span>
          {isOpen ? (
            <MinusIcon className="h-4" />
          ) : (
            <PlusIcon className="h-4" />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 bg-white border-t border-gray-300">
          <div
            className={`transition-all duration-1000 ${
              isOpen ? "max-h-[1000px]" : "max-h-0 overflow-hidden"
            }`}
          >
            <p className="mt-4  text-[#262626]  text-base font-medium ">
              {" "}
              {content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
