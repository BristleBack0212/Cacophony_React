export const fetchDmServers = (userId) => {
  return $.ajax({
    method: "GET",
    url: "/api/dm_servers",
    data: {user : userId}
  })
}

export const fetchDmServer = (dmServerId) => {
  return $.ajax({
    method: "GET",
    url: `/api/dm_servers/${dmServerId}`
  })
}

export const createDmServer = (dmServer) => {
  return $.ajax({
    method: "POST",
    url: "/api/dm_servers",
    data: {dmServer: dmServer}
  })
}

export const deleteDmServer = (serverId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/servers/${serverId}`,
  })
}
