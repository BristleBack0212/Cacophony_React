import * as dmMembership from "../util/dm_membership.utils";


export const RECEIVE_DM_MEMBERSHIP = "RECEIVE_DM_MEMBERSHIP"
export const REMOVE_DM_MEMBERSHIP = "REMOVE_DM_MEMBERSHIP"


const receiveDmMembership = (payload) => {
  return{
    type: RECEIVE_DM_MEMBERSHIP, 
    payload
  }
}

const removeDmMembership = (payload) => {
  return{
    type: REMOVE_DM_MEMBERSHIP, 
    payload
  }
}

export const createDmMembership = (membership) => (dispatch) => {
  return dmMembership.createDmMembership(membership)
  .then((payload) => {dispatch(receiveDmMembership(payload))})
}


export const deleteMembership = (memebershipId, membership) => (dispatch) => {
  return dmMembership.deleteDmMembership(memebershipId, membership)
  .then((payload) => {dispatch(removeDmMembership(payload))})
}

