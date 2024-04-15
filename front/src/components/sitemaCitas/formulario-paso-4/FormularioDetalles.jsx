import React, { useState } from 'react';
import InputField from './InputField';
import TextField from './TextField';

const FormularioDetalles = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes procesar los datos como desees (por ejemplo, enviar a una API)
    console.log({ nombre, apellido, email, telefono, observaciones });
    // Puedes agregar lógica adicional, como enviar datos a través de una API
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ingrese Sus Datos</h2>
      <InputField
        label="Nombre"
        value={nombre}
        onChange={setNombre}
      />
      <InputField
        label="Apellido"
        value={apellido}
        onChange={setApellido}
      />
      <InputField
        label="Email"
        value={email}
        onChange={setEmail}
      />
      <InputField
        label="Teléfono"
        value={telefono}
        onChange={setTelefono}
      />
      <TextField
        label="Observaciones"
        value={observaciones}
        onChange={setObservaciones}
      />
      <button type="submit">Enviar Reserva</button>
    </form>
  );
};

export default FormularioDetalles;
