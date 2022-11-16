/* Import ReactJs */
import React, { useEffect, useState } from 'react'

/* Import Fonctions API  */
import SportsAPI from '../../Services/SportsAPI.js'

/* Import style */
import './Sports.css'

export default function Sports() {

    /*HOOKS : Liste des différents sport */
    const [sports, setSports] = useState([])

    /**
     * Function RefreshData : GET tous les sports en BDD 
     * return array : sports
     */
    const refreshData = async () => {
        try {
            const data = SportsAPI.findSports().then(response => {
                setSports(response.data.data)
            })
        } catch (error) {
            console.log(error)
        }    
    }

    useEffect(() => {
        refreshData()
    } ,[])

    return (
        <main className='sportsSection'>
            <article>
                <h3>Tous nos sports</h3>
                <ul className='sportsContainer'>
                    {
                        sports.map((item) => {
                            console.log(item)
                            return (
                                <a href={`sport/${item.id}`}>
                                    <li key={item.attributes.nom}>
                                        <p>{item.attributes.nom}</p>
                                        <img src={`http://localhost:1337${item.attributes.SportIcon.data.attributes.url}`} />       
                                    </li>
                                </a>
                                
                            )
                        })
                    }
                </ul>
            </article> 
        </main>

    )
}
