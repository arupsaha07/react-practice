import React from 'react'
import {useDispatch} from 'react-redux';
import authService from '../../service/Auth';
import { logout } from '../../redux/slices/authSlice';

function LogoutBtn() {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(()=> {
            dispatch(logout())
        }).catch() 
    }
    return (
        <button onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn