'use client'
import { useState } from 'react';

export default function NewForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "0bb8901f-1cdc-4622-a628-a3f357deb340");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Submitted! Thanks for reaching out ❤️");
            (event.target as HTMLFormElement).reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='flex flex-col w-2/6'>
            <form onSubmit={onSubmit} className="flex flex-col space-y-4 form-container items-center w-full">
                <div className="w-full">
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name:</label>
                    <input type="text" name="name" id="name" required className="border border-gray-400 rounded px-4 py-2 w-full" />
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email:</label>
                    <input type="email" name="email" id="email" required className="border border-gray-400 rounded px-4 py-2 w-full" />
                </div>
                <div className="w-full">
                    <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message:</label>
                    <textarea name="message" id="message" required className="border border-gray-400 rounded px-4 py-2 w-full" />
                </div>

                <button type="submit" className="cursor-pointer bg-white hover:bg-gray-100 hover:shadow-sm text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition-all w-40">Submit Form</button>
            </form>
            <p className="text-center">{result}</p>
        </div>
    );
}
