import React, { useEffect, useState } from 'react';
import './UserTable.scss';
import api from '@/api';
import { useTranslation } from 'react-i18next';

interface user {
  id: number;
  userName: string;
  email: string;
  status: string;
  phone: string;
  address: string;
  createdAt: string;
  isDeleted: boolean;
  role: boolean;
}

const UserTable: React.FC = () => {
const [users, setUsers] = useState<user[] | null>(null);
const { t } = useTranslation();
const [searchTerm, setSearchTerm] = useState("");
const [currentPage, setCurrentPage] = useState(0);
const [totalPages, setTotalPages] = useState(0);
const [pageSize, setPageSize] = useState(10); 
useEffect(() => {
  // fetch data
  const fetchUsers = async () => {
    try {
      const response = await api.user.getAllusers( currentPage, pageSize, searchTerm);
      console.log(response.data);
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchUsers();
}, [currentPage, pageSize, searchTerm]);
const getPageNumbers = () => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};

const handleSearch = () => {
  setCurrentPage(0);

};
  return (
    <div className="user-table-container">
      <div className="header">
        <h1>User Table</h1>
        <div className="actions">
        <div className="search-box">
              <input
                type="text"
                placeholder={t("placeholderSearchCategory")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter
                    handleSearch();
                  }
                }
                }
              />
            <button className="search-button" onClick={handleSearch}>
              {t("search")}
            </button>
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
        <button
          onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {getPageNumbers().map((number) => (
          <button
            key={number}
            className={`pagination-button ${
              currentPage === number - 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(number - 1)}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
          }
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
        <select
          className="select-page-size"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setCurrentPage(0);
          }}
        >
          <option value="10">10 per page</option>
          <option value="20">20 per page</option>
          <option value="50">50 per page</option>
        </select>
      </div>
    </div>
  );
};

export default UserTable;
