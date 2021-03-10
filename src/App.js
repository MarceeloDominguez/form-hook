import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import EditUser from "./Components/EditUser";
import Form from "./Components/Form";
import UserTable from "./Components/UserTable";

function App() {

  const [users, setUsers] = useState([])

  const addUser = (user) => {
    user.id = uuid()
    setUsers([
      ...users, user
    ])
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const [editing, setEditing] = useState(false)

  const [currentUser, setCurrentUser] = useState({
    id: null,
    nombre: '',
    apellido: '',
    telefono: ''
  })

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      nombre: user.nombre,
      apellido: user.apellido,
      telefono: user.telefono
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  /** local storage **/
  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    saveLocalStorage()
  }, [users])

  const saveLocalStorage = () => {
    localStorage.setItem('user', JSON.stringify(users))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('user') === null) {
      localStorage.setItem('user', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('user'))
      setUsers(todoLocal)
    }
  }
  /** fin local storage **/

  return (
    <div className='container pt-2'>
      <div className='row'>
        <div className='col-md-4'>
          {
            editing ? (
              <EditUser
                updateUser={updateUser}
                currentUser={currentUser}
              />
            ) : (
              <Form
                addUser={addUser}
              />
            )
          }
        </div>
        <div className='col-md-8'>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
