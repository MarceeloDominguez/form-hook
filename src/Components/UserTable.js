import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';

const UserTable = ({ users, deleteUser, editRow }) => {
    //console.log(users)
    return (
        <table className='table mt-1'>
            <thead className='table-primary'>
                <tr>
                    <th>Nombre</th>
                    <th>Apellida</th>
                    <th>Telefono</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.nombre}</td>
                            <td>{user.apellido}</td>
                            <td>{user.telefono}</td>
                            <td className="d-flex justify-content-between">
                                <RiDeleteBin6Line onClick={() => deleteUser(user.id)}/>
                                <FiEdit onClick={() => editRow(user)}/>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}
 
export default UserTable;