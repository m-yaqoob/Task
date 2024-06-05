import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../store/userSlice";
import Button from "./Button";

const UsersData = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const userStatus = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const [newUser, setNewUser] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);
  const [editingUserName, setEditingUserName] = useState("");


  useEffect(() => {
    dispatch(fetchUsers());
    return;
  }, [dispatch]);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  const handleAddUser = () => {
    dispatch(addUser({ name: newUser }));
    setNewUser("");
  };

  const handleEditUser = (user) => {
    setEditingUserId(user.id);
    setEditingUserName(user.name);
  };

  const handleUpdateUser = (userId) => {
    dispatch(updateUser({ id: userId, name: editingUserName }));
    setEditingUserId(null);
    setEditingUserName("");
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  if (userStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (userStatus === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <Button title="Add User" onClick={handleAddUser} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={editingUserName}
                    onChange={(e) => setEditingUserName(e.target.value)}
                  />
                ) : (
                  <span>{user.name}</span>
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <Button
                    title="Save"
                    onClick={() => handleUpdateUser(user.id)}
                  />
                ) : (
                  <>
                    <Button title="Edit" onClick={() => handleEditUser(user)} />
                    <Button
                      title="Delete"
                      onClick={() => handleDeleteUser(user.id)}
                    />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersData;
