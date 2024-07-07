import React from 'react';
import './UserTable.scss';
import { Link } from 'react-router-dom';

const UserTable: React.FC = () => {
  return (
    <div className="user-table-container">
      <div className="header">
        <h1>User Table</h1>
        <div className="actions">
          <button className="add-button">
            <Link className="link-add-user" to ="/admin/user/add">Add new User</Link>
            </button>
          <div className="search-box">
            <input type="text" placeholder="Enter user's name..." />
            <button>Search</button>
          </div>
        </div>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Email</th>
            <th>FullName</th>
            <th>Status</th>
            <th>Password</th>
            <th>Avatar</th>
            <th>Phone</th>
            <th>Address</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
            <th>IsDeleted</th>
            <th>Role</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyena</td>
            <td>Nguyenvana@gmail.com</td>
            <td>Nguyễn Văn A</td>
            <td>Active</td>
            <td>******</td>
            <td><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_149071&psig=AOvVaw1gyZ8EE6ti-g_ssUin827T&ust=1719834941439000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKi8l7HehIcDFQAAAAAdAAAAABAE" alt="User avt" /></td>
            <td>0904533965</td>
            <td>77 Le Trung Ngia</td>
            <td>28/06/2024</td>
            <td>29/06/2024</td>
            <td>False</td>
            <td>Admin</td>
            <td>
              <button className="unlock-button">Unlock</button>
            </td>
            <td>
              <button className="lock-button">Lock</button>
            </td>
            <td>
              <button className="delete-button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <button className="pagination-button">Previous</button>
        <button className="pagination-button">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">3</button>
        <button className="pagination-button">4</button>
        <button className="pagination-button">Next</button>
      </div>
    </div>
  );
};

export default UserTable;
