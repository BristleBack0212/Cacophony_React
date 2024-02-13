
export const createDm = (dm) => {
  return $.ajax({
    method: "POST",
    url: "/api/dm_messages",
    data: {dm}
  })
}

export const deleteDm = (messageId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/dm_messages/${messageId}`,
  })
}

export const updateDm = (dm) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/dm_messages/${dm.id}`,
    data: {dm}
  })
}