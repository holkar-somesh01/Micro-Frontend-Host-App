import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Protected = ({ compo: React.Component }) => {
    const { user } = useSelector(state => state.auth)
    return user ? compo : <Navigate to='/auth' />
}

export default Protected