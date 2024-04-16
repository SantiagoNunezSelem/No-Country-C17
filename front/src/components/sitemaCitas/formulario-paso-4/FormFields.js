import React from 'react';

const InputField = ({ label, name, value, onChange, error }) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block mb-2 text-xs font-medium text-salmon dark:text-custom-red uppercase">
                {label}
            </label>


            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="block w-full p-3 text-lg text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

const TextAreaField = ({ label, name, value, onChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                rows={4}
                className="w-full p-3 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    );
};

export { InputField, TextAreaField };
