import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { GrContactInfo } from 'react-icons/gr';

const Form = ({ addUser }) => {

    const { register, errors, handleSubmit } = useForm()

    const initialFormState = { id: null, nombre: '', apellido: '', telefono: '' }
    const [user, setUser] = useState(initialFormState)

    const onSubmit = (e) => {
        //e.preventDefault()
        addUser(user)
        setUser(initialFormState) //reset
        //console.log(user)
    }

    const inputChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    return (
        <div className='card'>
            <div className='card-header text-center'>
                Registrarse
                <GrContactInfo className='float-left mt-1' />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
                <label htmlFor='nombre'>Nombre</label>
                <div className='form-group'>
                    <input
                        ref={
                            register({
                                required: { value: true, message: 'Campo requerido' }
                            })
                        }
                        id='nombre'
                        type='text'
                        onChange={inputChange}
                        name='nombre'
                        value={user.nombre}
                        className='form-control'
                    />
                    <div className='text-danger'>
                        {errors?.nombre?.message}
                    </div>
                </div>
                <label htmlFor='apellido'>Apellido</label>
                <div className='form-group'>
                    <input
                        ref={
                            register({
                                required: { value: true, message: 'Campo requerido' }
                            })
                        }
                        id='apellido'
                        type='text'
                        name='apellido'
                        value={user.apellido}
                        onChange={inputChange}
                        className='form-control'
                    />
                    <div className='text-danger'>
                        {errors?.apellido?.message}
                    </div>
                </div>
                <label htmlFor='telefono'>Telefono</label>
                <div className='form-group'>
                    <input
                        ref={
                            register({
                                required: { value: true, message: 'Campo requerido' }
                            })
                        }
                        id='telefono'
                        type='text'
                        name='telefono'
                        value={user.telefono}
                        onChange={inputChange}
                        className='form-control'
                    />
                    <div className='text-danger'>
                        {errors?.telefono?.message}
                    </div>
                </div>
                <button className='btn btn-primary btn-block'>
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Form;
