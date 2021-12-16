import { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import Nav from '../../components/Nav/Nav'

import './OneUser.css'

const OneUser = () => {

    const [User, setUser] = useState(null)

    const {slug} = useParams()

    useEffect( () => {
        fetch(`http://localhost:5000/${slug}`)
        .then(res => res.json())
        .then(res => {
            setUser(res)})
    },[User])

    if(!User){
        return <h1>Loading</h1>
    }

    return (
        <>
            <Nav/>
            <div className='allUsers'>
                <h1>{User.name}</h1>
                <div className="User">
                    <h2>{User.name}</h2>
                    <h3>City : {User.city}</h3>
                    <h2>{User.email}</h2>
                    <img src={User.image} alt="Pas d'image" />
                </div>
            </div>
        </>
    )
}

export default OneUser
