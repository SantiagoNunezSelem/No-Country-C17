import React, {useRef, useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import toast, {Toaster} from 'react-hot-toast';

function Contacto() {
  
  const {register, handleSubmit}=useForm({
    //carga de datos
    defaultValues:{
      name:'',
      email:'',
      message:''
    }
  });
  const onSubmit=(data)=>{
    //loguea en consola la data cargada por el usuario y muestra el toast
    console.log('Form submitted', data);
    toast.success('Consulta enviada!');
  }

  const [isDisabled, setIsDisabled] = useState(true);
  let clickCount=0;

  function clickCounter(){
    if( clickCount!=0){
      setIsDisabled(true);
    }
   clickCount++;
  }
  
  function handleInputChange(inputLength) {
    // bloquea el boton hasta que se llenan todos los campos
    if (inputLength.target.value.length > 7) {
        setIsDisabled(false);
    } else {
        setIsDisabled(true);
    }
}

  return (
    <div>
    <div>
      <Toaster position="bottom-center" 
        reverseOrder={false} 
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#fff',
            backgroundColor: '#333'
    },
  }} 
      />
    </div>
      <div id='contacto' className='justify-center'>
        <div id='contacto-text' className='sm:w-full'>
          <h1 id='contacto-title'>CONTACTO</h1>
          <h2>
            <p className='min-w-fit text-justify pb-5'>Estamos encantados de que estes interesado en nuestros servicios.</p>
            <p className='min-w-fit text-justify'>Por favor, completa el siguiente formulario para reservar tu cita con uno de nuestros talentosos barberos.</p>
            <p className='min-w-fit text-justify pb-10'>¡Esperamos recibirte pronto en nuestra barberia!</p>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className='text-justify pl-50'>
            <ul>
              <li><label htmlFor="name" className='mt-20px'>Nombre: </label></li>
              <li><input {...register('name')} minLength="4" id="name" type="text" pattern="[a-zA-Z ]*" className='text-white bg-neutral-800 h-10 invalid:text-rose-400' onChange={handleInputChange} /></li>

              <li><label htmlFor="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}">Correo: </label></li>
              <li><input {...register('email')} id="email" type="email" minLength="6" className='text-white  bg-neutral-800 h-10 invalid:text-rose-400' onChange={handleInputChange} /></li>

              <li><label htmlFor="message">Tu mensaje: </label></li>
              <li><textarea {...register('message')} id="message" type="text" minLength="8" className='text-white bg-neutral-800' onChange={handleInputChange}/></li>

              <li><input id="button" type="submit" disabled={isDisabled} onClick={clickCounter}/></li>
            </ul>
          </form>
        </div>
        <div id='contacto-img' className='hidden md:block'></div>
      </div>
    </div>
    );
  }
  
export default Contacto;