import * as dmUtil from "../util/dm_messages_utils"

export const RECEIVE_DM_MESSAGE = "RECEIVE_DM_MESSAGE";
export const REMOVE_DM_MESSAGE = "REMOVE_DM_MESSAGE";


const receiveDmMessage = (payload) => {
  return{
    type: RECEIVE_DM_MESSAGE,
    payload
  }
}

const removeDmMessage = (payload) => {
  return {
    type: REMOVE_DM_MESSAGE,
    payload
  }
}

const receiveErrors = (errors) => {
    return{
      type: RECEIVE_SESSION_ERRORS, 
      errors
    }
}
export const createDmMessage = (dm) => (dispatch) => {
  return dmUtil.createDm(dm)
  .then((payload) => {dispatch(receiveDmMessage(payload))}
  , (err) => {dispatch(receiveErrors(err.responseJson))})
}

export const deleteDmMessage = (dmId) => (dispatch) => {
  return dmUtil.deleteDm(dmId)
  .then((payload) => {dispatch(removeDmMessage(payload))}
  , (err) => {dispatch(receiveErrors(err.responseJson))})
}

export const updateDmMessage = (dm) => (dispatch) => {
  return dmUtil.updateDm(dm)
  .then((payload) => {dispatch(receiveDmMessage(payload))}
  , (err) => {dispatch(receiveErrors(err.responseJson))})
}