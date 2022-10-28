import React, { useState, useEffect } from "react";
import Header from "../components/header";
import UsersInfo from "../components/UsersInfo";
import axios from "axios";
import Pagination from "../components/Pagination";

const Users: React.FC = () => {
  //UseStates
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(3);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(
        "http://jsonplaceholder.typicode.com/users?users=50"
      );
      setUsers(res.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);
  //console.log(users);

  //change page
  const paginate: any = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  //get current posts
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  return (
    <div>
      <Header />
      <div className="users mt-5">
        <h1 className="text-primary mb-3">Users</h1>
        <UsersInfo users={currentUsers} loading={loading} />
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Users;
