
import React from 'react';

function Button({ text, onClick }) {


    return (
        <button
            className={`bg-primary-color font-bold uppercase text-slate-200 py-2 px-8 rounded-lg hover:bg-slate-200 hover:text-primary-color duration-300 border-2 border-primary-color`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
