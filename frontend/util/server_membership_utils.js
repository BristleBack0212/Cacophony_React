

export const createServerMembership = (membership) => {
  return $.ajax({
    method: "POST",
    url: "/api/server_memberships",
    data: {server_membership: membership}
  })
}



export const deleteServerMembership = (membershipId, membership) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/server_memberships/${membershipId}`,
    data: {server_membership: membership}
  })
}