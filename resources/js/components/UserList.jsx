import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import UserTable from './UserTable';
import Pagination from './Pagination';
import '../styled/UserList.css';


export default function UserList({ search }) {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 20;

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  useEffect(() => {
    setCurrentPage(1); // volta para página 1 ao pesquisar
  }, [search]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleNext = () => setCurrentPage(p => Math.min(p + 1, totalPages));
  const handlePrev = () => setCurrentPage(p => Math.max(p - 1, 1));
  const handleFirst = () => setCurrentPage(1);
  const handleLast = () => setCurrentPage(totalPages);

  return (
    <div className="user-container">
      {search.trim() === '' ? (
        <p className="user-message">
          Digite algo na pesquisa para ver resultados.
        </p>
      ) : filteredUsers.length > 0 ? (
        <>
          <UserTable users={currentUsers} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={handleNext}
            onPrev={handlePrev}
            onFirst={handleFirst}
            onLast={handleLast}
          />
        </>
      ) : (
        <p className="user-message">Nenhum usuário encontrado.</p>
      )}
    </div>
  );
}
