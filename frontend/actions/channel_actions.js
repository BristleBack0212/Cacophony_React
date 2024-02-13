import * as channelUtil from "../util/channel_utils"

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS"
export const REMOVE_CHANNEL_ERRORS = "REMOVE_CHANNEL_ERRORS"


const recieveChannel = (payload) => {
  return{
    type: RECEIVE_CHANNEL, 
    payload
  }
}

const removeChannel = (payload) => {
  return{
    type: REMOVE_CHANNEL, 
    payload
  }
}

const receiveErrors = (errors) => {
    return{
      type: RECEIVE_CHANNEL_ERRORS, 
      errors
    }
}

export const removeErrors = () => {
    return{
      type: REMOVE_CHANNEL_ERRORS, 
    }
}



export const fetchChannel = (channelId) => (dispatch) => {
  return channelUtil.fetchChannel(channelId)
  .then((payload) => {dispatch(recieveChannel(payload))}
  , (err) => {dispatch(receiveErrors(err.responseJSON))}
  )
}


export const createChannel = (channel) => (dispatch) => {
    return channelUtil.createChannel(channel)
    .then(function(payload){
      dispatch(removeErrors())
      return dispatch(recieveChannel(payload))}
    , (err) => {dispatch(receiveErrors(err.responseJSON)) })
}

export const deleteChannel = (channelId) => (dispatch) => {
  return channelUtil.deleteChannel(channelId)
  . then(() => dispatch(removeChannel(channelId))) 
}

export const updateChannel = (channel) => (dispatch) => {
    return channelUtil.updateChannel(channel)
    .then(function(payload){
      dispatch(removeErrors())
      return dispatch(recieveChannel(payload))}
    , (err) => {dispatch(receiveErrors(err.responseJSON)) })
}