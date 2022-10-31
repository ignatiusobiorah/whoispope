import React, { useState, useEffect } from "react";
import Header from "../components/header";
// import UsersInfo from "../components/UsersInfo";
// import axios from "axios";
// import Pagination from "../components/Pagination";
import ReactPaginate from "react-paginate";
import "../styles/user.scss";

const Users: React.FC = () => {
  // //UseStates
  const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [usersPerPage, setUsersPerPage] = useState(3);

  //state to control pagination
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3;
  const pageVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pageVisited, pageVisited + usersPerPage)
    .map((user: any) => {
      return (
        <div className="user">
          <ul>{user.name}</ul>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((data) => {
        setUsers(data);
      })
    );
  }, []);

  //use effect fetch api with axios
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     setLoading(true);
  //     const res = await axios.get(
  //       "http://jsonplaceholder.typicode.com/users?users=50"
  //     );
  //     setUsers(res.data);
  //     setLoading(false);
  //   };

  //   fetchUsers();
  // }, []);

  // console.log(users);

  // change page
  // const paginate: any = (pageNumber: any) => {
  //   setCurrentPage(pageNumber);
  // };

  //get current posts
  // const indexOfLastUser = currentPage * usersPerPage;
  // const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  // return (
  //   <div>
  //     <Header />
  //     <div className="users mt-5">
  //       <h1 className="text-primary mb-3">Users</h1>
  //       <UsersInfo users={currentUsers} loading={loading} />
  //       <Pagination
  //         usersPerPage={usersPerPage}
  //         totalUsers={users.length}
  //         paginate={paginate}
  //       />
  //     </div>
  //   </div>
  // );

  //handle next button click
  // const handleNext = (e: any) => {
  //   e.preventDefault();
  // };

  // //handle prev button click
  // const handlePrev = (e: any) => {
  //   e.preventDefault();
  // };
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <Header />
      {/* <div className="users mt-5">
        <h1>Users</h1>
        <UsersInfo users={currentUsers} loading={loading} />
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          paginate={paginate}
        />
      </div> */}
      <div className="mainContainer mt-5">
        <h1>Users</h1>
        {displayUsers}
        <ReactPaginate
          pageCount={pageCount}
          previousLabel={"PREV"}
          nextLabel={"NEXT"}
          onPageChange={changePage}
          containerClassName={"paginationBtn"}
          previousLinkClassName={"prevBtn"}
          nextLinkClassName={"nxtBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Users;
