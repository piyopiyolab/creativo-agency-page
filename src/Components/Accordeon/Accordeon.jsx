import React, { useState } from "react";
import chevron from '../../assets/icons/chevron.svg';
import { tabsData } from "../../constants/constants";

function Accordeon() {
    const [showText, setShowText] = useState({
        text1: true,
        text2: false,
        text3: false,
        text4: false,
    });

    // toggle show Data
    const toggleText = (index) => {

        const updatedShowText = { ...showText };
        Object.keys(updatedShowText).forEach((key, idx) => {
            updatedShowText[key] = idx === index;
        });
        setShowText(updatedShowText);
    };

    return (
        <>
            {tabsData.map((element, index) => (
                <article key={index} className="flex flex-col">
                    <div className="flex flex-row items-center cursor-pointer justify-between"
                        onClick={() => toggleText(index)}>
                        <h3 className="servicesHeadings w-full  font-semi-bold text-slate-100 text-2xl">{element.title}</h3>
                        <img src={chevron} className={`ml-2 transform ${showText[`text${index + 1}`] ? '' : 'rotate-180'}`} alt="chevron icon" />
                    </div>
                    {showText[`text${index + 1}`] && <p className="text-secondary-color text-lg mb-4">{element.txt}</p>}
                </article>
            ))}
        </>
    );
}

export default Accordeon;
