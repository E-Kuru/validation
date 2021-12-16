import React from 'react'
import Nav from '../../components/Nav/Nav'
import './Users.css'

import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

    const [Users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(res => {
            setUsers(res)})
    },[])


    return (
        <>
        <Nav/>

        {Users.map(e => (
            <div key={e.name + e.slug}>
                <p>{e.name}</p>
                <Link to={`/${e.slug}`}><button> View User</button></Link>
            </div>
        ))}
        </>
    )}

export default Users