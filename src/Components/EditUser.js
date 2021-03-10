//import React from 'react'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { GrContactInfo } from 'react-icons/gr';

const EditUser = ({ updateUser, currentUser }) => {

    const { register, errors, handleSubmit } = useForm()

    const [user, setUser] = useState(currentUser)

    const onSubmit = (e) => {
        updateUser(user.id, user)
    }

    const inputChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value})
    }

    useEffect(() => {
        setUser(currentUser)
    }, [currentUser])

    return(
        <div className='card'>
            <div className='card-header text-center'>
                Registrarse
                <GrContactInfo className='float-left mt-1'/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
                <label htmlFor='nombre'>Nombre</label>
                <div className='form-group'>
                    <input
                    ref={
                        register({
                            required: { value: true, message: 'Campo requerido'}
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
                            required: { value: true, message: 'Campo requerido'}
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
                            required: { value: true, message: 'Campo requerido'}
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
                <button className='btn btn-dark btn-block'>
                    Editar
                </button>
            </form>
        </div>
    )
}

export default EditUser