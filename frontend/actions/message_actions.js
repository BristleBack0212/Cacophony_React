import * as messageUtil from "../util/message_utils"

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";


const receiveMessage = (payload) => {
  return{
    type: RECEIVE_MESSAGE,
    payload
  }
}

const removeMessage = (payload) => {
  return {
    type: REMOVE_MESSAGE,
    payload
  }
}

const receiveErrors = (errors) => {
    return{
      type: RECEIVE_SESSION_ERRORS, 
      errors
    }
}

export const createMessage = (message) => (dispatch) => {
  return messageUtil.createMessage(message)
  .then((payload) => {dispatch(receiveMessage(payload))}
  , (err) => {dispatch(receiveErrors(err.responseJson))})
}

export const deleteMessage = (messageId) => (dispatch) => {
  return messageUtil.deleteMessage(messageId)
  .then((payload) => {dispatch(removeMessage(payload))}
  , (err) => {dispatch(receiveErrors(err.responseJson))})
}

export const updateMessage = (message) => (dispatch) => {
  return messageUtil.updateMessage(message)
  .then((payload) => {dispatch(receiveMessage(payload))}
  , (err) => {dispatch(receiveErrors(err.responseJson))})
}