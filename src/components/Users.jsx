import React, { useContext, useState } from "react"
import { FaSearch, FaUserPlus, FaEdit, FaTrashAlt } from "react-icons/fa"
import Modal from "./Modal"
import "./Users.css"
import { GlobalContext } from "../context"

const Users = () => {
  const { usersList } = useContext(GlobalContext)
  const [users, setUsers] = useState(usersList)
  const [searchTerm, setSearchTerm] = useState("")
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    studentID: "",
    major: "",
  })
  const [editingUser, setEditingUser] = useState(null)
  const [isAddModalOpen, setAddModalOpen] = useState(false)
  const [isEditModalOpen, setEditModalOpen] = useState(false)

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.studentID && newUser.major) {
      setUsers([...users, { id: Date.now(), ...newUser }])
      setNewUser({ name: "", email: "", studentID: "", major: "" })
      setAddModalOpen(false)
    } else {
      alert("Vui lòng nhập đầy đủ thông tin")
    }
  }

  const handleEditUser = (id) => {
    const user = users.find((user) => user.id === id)
    setEditingUser(user)
    setEditModalOpen(true)
  }

  const handleUpdateUser = () => {
    setUsers(
      users.map((user) => (user.id === editingUser.id ? editingUser : user))
    )
    setEditingUser(null)
    setEditModalOpen(false)
  }

  const handleDeleteUser = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
      setUsers(users.filter((user) => user.id !== id))
    }
  }

  const filteredUsers = users
    .filter((user) => user.email !== "spso@hcmut.edu.vn")
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.studentID.includes(searchTerm) ||
        user.major.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <div className="app h-[80vh] overflow-y-scroll" id="style-15">
      <div className="breadcrumb">
        <span>Trang chủ</span> &gt; <span>Quản lý người dùng</span>
      </div>

      <h1 className="page-title">Quản lý người dùng</h1>

      <div className="search-add-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Tìm kiếm người dùng"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>

        <button onClick={() => setAddModalOpen(true)} className="add-button">
          <FaUserPlus /> Thêm người dùng
        </button>
      </div>

      <Modal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)}>
        <h2>Thêm người dùng mới</h2>
        <input
          type="text"
          placeholder="Tên người dùng"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email người dùng"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="MSSV"
          value={newUser.studentID}
          onChange={(e) =>
            setNewUser({ ...newUser, studentID: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Khoa"
          value={newUser.major}
          onChange={(e) => setNewUser({ ...newUser, major: e.target.value })}
        />
        <button onClick={handleAddUser}>Thêm</button>
      </Modal>

      <Modal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)}>
        <h2>Sửa thông tin người dùng</h2>
        {editingUser && (
          <>
            <input
              type="text"
              value={editingUser.name}
              onChange={(e) =>
                setEditingUser({ ...editingUser, name: e.target.value })
              }
            />
            <input
              type="email"
              value={editingUser.email}
              onChange={(e) =>
                setEditingUser({ ...editingUser, email: e.target.value })
              }
            />
            <input
              type="text"
              value={editingUser.studentID}
              onChange={(e) =>
                setEditingUser({
                  ...editingUser,
                  studentID: e.target.value,
                })
              }
            />
            <input
              type="text"
              value={editingUser.major}
              onChange={(e) =>
                setEditingUser({
                  ...editingUser,
                  major: e.target.value,
                })
              }
            />
            <button onClick={handleUpdateUser}>Cập nhật</button>
          </>
        )}
      </Modal>

      <table className="user-table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Email</th>
            <th>MSSV</th>
            <th>Khoa</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.studentID}</td>
              <td>{user.major}</td>
              <td>
                <button
                  onClick={() => handleEditUser(user.id)}
                  className="action-button edit"
                >
                  <FaEdit /> Sửa
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="action-button delete"
                >
                  <FaTrashAlt /> Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
