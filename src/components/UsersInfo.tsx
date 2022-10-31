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
      {users.map(
        (user: {
          id: React.Key | null | undefined;
          name:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
        }) => (
          <li key={user.id} className="list-group-item">
            {user.name}
          </li>
        )
      )}
    </ul>
  );
};

export default UsersInfo;
