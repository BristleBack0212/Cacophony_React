import * as dmServerUtil from '../util/dm_servers_utils';

export const RECEIVE_DM_SERVER = 'RECEIVE_DM_SERVER';
export const RECEIVE_DM_SERVERS = 'RECEIVE_DM_SERVERS';
export const REMOVE_DM_SERVER = 'REMOVE_DM_SERVER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveDmServers = (dmServers) => {
    return{ 
        type: RECEIVE_DM_SERVERS,
        dmServers
    }
};

const receiveDmServer = (dmServer) => {
    return{ 
        type: RECEIVE_DM_SERVER,
        dmServer
    }
};
const removeDmServer = (dmServerId) => {
    return ({
        type: REMOVE_DM_SERVER,
        dmServerId
    })
}

const receiveErrors = (errors) => {
    return({
        type: RECEIVE_SESSION_ERRORS, 
        errors
    })
}

export const fetchDmServers = (user) => (dispatch) => {
    return dmServerUtil.fetchDmServers(user)
    .then((servers) => {dispatch(receiveDmServers(servers))},
    (err) => {dispatch(receiveErrors(err.responseJSON))} )
}

export const fetchDmServer = (dmServerId) => (dispatch) => {
    return dmServerUtil.fetchDmServer(dmServerId)
    .then((dmServer) => {dispatch(receiveDmServer(dmServer))},
    (err) => {dispatch(receiveErrors(err.responseJSON))} )
}

export const createDmServer = (dmServer) => (dispatch) => {
    return dmServerUtil.createDmServer(dmServer)
    .then(function(dmServer){return dispatch(receiveDmServer(dmServer))}
    , (err) => {dispatch(receiveErrors(err.responseJSON)) })
}

export const deleteDmServer = (dmServerId) => (dispatch)  => {
    return dmServerUtil.deleteDmServer(dmServerId)
    .then(() => {dispatch(removeDmServer(dmServerId))})
}


