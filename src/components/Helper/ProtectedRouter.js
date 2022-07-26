import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';
import {Navigate} from 'react-router-dom';

export const ProtectedRouter = ({children}) => {
    const {login} = useContext(UserContext);

    return login ? children :  <Navigate to="/login"/> ;
}
