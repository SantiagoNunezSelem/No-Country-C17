import React, { useState, useEffect } from 'react';
import { InputField, TextAreaField } from './FormFields';


const FormularioDetalles = ({cargar}) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        observaciones: ''
    });

    useEffect(() => {
        cargar({ name: "formData", value: formData });
      }, [formData]);

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Validación en tiempo real para el campo de correo electrónico
        if (name === 'email') {
            const isValidEmail = /\S+@\S+\.\S+/.test(value);
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: isValidEmail ? '' : 'Por favor, introduce un email válido'
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones al enviar el formulario
        const formErrors = validateForm(formData);

        // Si hay errores, establecer el estado de errores y detener el envío del formulario
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Si no hay errores, proceder con el envío del formulario
        console.log(formData);
        // Aquí puedes realizar cualquier acción necesaria con los datos del formulario

        // Limpiar el formulario después de enviar
        clearForm();
    };

    return (
        <div className="w-full flex ">
            <div className="w-full lg:w-3/4">
            <h2 className="text-2xl font-medium mb-4 text-salmon">Ingrese sus Datos</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex mb-6">
                        <div className="w-1/2 pr-2">
                            <InputField
                                label="Nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                error={errors.nombre}
                                inputClassName="p-3 text-base"
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <InputField
                                label="Apellido"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleInputChange}
                                error={errors.apellido}
                                inputClassName="p-3 text-base"
                            />
                        </div>
                    </div>
                    <div className="flex mb-6">
                        <div className="w-1/2 pr-2">
                            <InputField
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                error={errors.email}
                                inputClassName="p-3 text-base"
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <InputField
                                label="Telefono"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleInputChange}
                                error={errors.telefono}
                                inputClassName="p-3 text-base"
                            />
                        </div>
                    </div>
                    <TextAreaField
                        label="Observaciones"
                        name="observaciones"
                        value={formData.observaciones}
                        onChange={handleInputChange}
                        inputClassName="p-3 text-base"
                    />
                    <div className="flex justify-end mt-2">
                       <button></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormularioDetalles;
