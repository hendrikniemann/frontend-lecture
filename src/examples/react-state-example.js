import * as React from "react";

export function UserList(props) {
  const [users, setUsers] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [setUsers]);

  if (users === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {users.map(user => (
        <div>
          {user.name} - {user.birthDay}
        </div>
      ))}
    </div>
  );
}

export function UserCount(props) {
  // eslint-disable-next-line no-undef
  return <div>{users === null ? "Loading..." : users.length}</div>;
}

export function UserPanel(props) {
  const [users, setUsers] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [setUsers]);

  return (
    <>
      <UserCount users={users} />
      <UserList users={users} />
    </>
  );
}

export const AppState = React.createContext({
  users: [],
  fetchUsers: () => null
});

export const useAppState = () => React.useContext(AppState);

function reducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return action.payload.users;
    case "UPDATE_USER":
      return state.map(user => {
        if (user.id === action.payload.user.id) {
          return action.payload.user;
        }
        return user;
      });
    default:
      return state;
  }
}

export function AppStateProvider(props) {
  const [users, dispatch] = React.useReducer(reducer, null);
  const fetchUsers = force => {
    if (users !== null && !force) {
      return;
    }
    return fetch("/api/users")
      .then(response => response.json())
      .then(data => dispatch({ type: "SET_USERS", payload: { users: data } }));
  };
  const updateUser = user => {
    fetch("/api/users/" + user.id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          dispatch({ type: "UPDATE_USER", user });
        }
      });
  };

  return (
    <AppState.Provider value={{ users, fetchUsers, updateUser }}>
      {props.children}
    </AppState.Provider>
  );
}

export function UserListFromContext(props) {
  const { users, fetchUsers } = useAppState();
  React.useEffect(() => fetchUsers(), [fetchUsers]);

  if (users === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {users.map(user => (
        <div>
          {user.name} - {user.birthDay}
        </div>
      ))}
    </div>
  );
}
