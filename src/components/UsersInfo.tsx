import React from "react";

interface Props {
  users: any;
  loading: any;
}

const UsersInfo = ({ users, loading }: Props) => {
  if (loading) {
    return <h2>Loading..</h2>;
  }
  return (
    <ul className="list-group mb-4">
      {users.map((user: any) => (
        <li key={user.id} className="list-group-item">
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UsersInfo;
