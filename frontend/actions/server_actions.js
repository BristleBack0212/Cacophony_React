import * as serverUtil from '../util/server_utils';

export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const REMOVE_SERVER = 'REMOVE_SERVER'
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const REMOVE_SERVER_ERRORS = "REMOVE_SERVER_ERRORS"


const receiveServers = (servers) => {
    return{ 
        type: RECEIVE_SERVERS,
        servers
    }
};

const receiveServer = (server) => {
    return{ 
        type: RECEIVE_SERVER,
        server
    }
};
const removeServer = (serverId) => {
    return ({
        type: REMOVE_SERVER,
        serverId
    })
}

const receiveServerErrors = (errors) => {
    return({
        type: RECEIVE_SERVER_ERRORS, 
        errors
    })
}

export const removeServerErrors = () => {
    return({
        type: REMOVE_SERVER_ERRORS
    })
}

export const fetchServers = (user) => (dispatch) => {
    return serverUtil.fetchServers(user)
    .then((servers) => {dispatch(receiveServers(servers))},
    (err) => {dispatch(receiveServerErrors(err.responseJSON))} )
}

export const fetchServer = (serverId) => (dispatch) => {
    return serverUtil.fetchServer(serverId)
    .then((server) => dispatch(receiveServer(server)))
}

export const createServer = (server) => (dispatch) => {
    return serverUtil.createServer(server)
    .then(function(server){
        dispatch(removeServerErrors())
        return dispatch(receiveServer(server))
    }
    , (err) => dispatch(receiveServerErrors(err.responseJSON)) )
}

export const updateServer = (server) => (dispatch) => {
    return serverUtil.updateServer(server)
    .then(function(server){
        dispatch(removeServerErrors())
        return dispatch(receiveServer(server))}
    , (err) => dispatch(receiveServerErrors(err.responseJSON)) )
}

export const deleteServer = (serverId) => (dispatch)  => {
    return serverUtil.deleteServer(serverId)
    .then(() => {dispatch(removeServer(serverId))})
}


