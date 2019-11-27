/* 
    创建action对象
        同步，异步
*/
import {
    reqLogin
} from '../../api'

import {
    GET_USER_SUCCESS,
    REMOVE_USER_SUCCESS
} from '../action-types/user'

const getUserSuccess = (user) => ({
    type: GET_USER_SUCCESS,
    data: user
})

export const removeUserSuccess = () => ({
    type: REMOVE_USER_SUCCESS,
})

export const getUserAsync = (username, password) => {
    return (dispatch) => {
        return reqLogin(username, password)
            .then((response) => {
                //创建 调用
                const action = getUserSuccess(response)

                dispatch(action);
                return response;
            })
    }
} 
