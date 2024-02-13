export const createUser = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: {user: user}
  })
}

export const createSession = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: {user: user}
  })
}

export const deleteSession = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session",
  })
}


export const updateUser = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: {user: user}
  })
}

export const deleteUser = (userId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}`
  })
}

// Used to find users associated with the current_user but not in a dm with them

export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: `/api/users`,
  })
}