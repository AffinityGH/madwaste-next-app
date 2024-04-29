import React from 'react';

interface ButtonProps {
    slug: string;
    label: string;
}

const Button: React.FC<ButtonProps> = ({ slug, label }) => {
    return (
        <a href={slug} className="cursor-pointer bg-white hover:bg-gray-100 hover:shadow-sm text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition-all" >
            {label}
        </a>
    );
};

export default Button;