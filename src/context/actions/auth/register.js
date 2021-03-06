import axiosInstance from "../../../helpers/axios";
import {REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS} from "../../../constants/actionTypes";

export const register = ({
    email,
    password,
    username,
    lastname:last_name,
    firstname:first_name,

}) => (dispatch) => {

    dispatch({
        type:REGISTER_LOADING,
    })
    axiosInstance.post('/auth/register',{
            email,
            password,
            username,
            last_name,
            first_name,
    }
        ).then((res) => {
            dispatch({
                type:REGISTER_SUCCESS,
                payload:res.data
            })
    }).catch((err) => {
        dispatch({
            type:REGISTER_ERROR,
            payload:err.response.data
        })
        }
    )
}