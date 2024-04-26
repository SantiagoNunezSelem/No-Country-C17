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
                className="block w-full p-3 text-lg"
            />

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

const TextAreaField = ({ label, name, value, onChange }) => {
    return (
        <div id='form-fields' className="mb-4">
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-salmon dark:text-salmon">
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                rows={3}
                className="w-full p-3"
            />
        </div>
    );
};

export { InputField, TextAreaField };
