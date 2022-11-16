import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import SportsAPI from '../../Services/SportsAPI';
import moment from 'moment'
import "./SportEvents.css"

export default function SportEvents() {

    const { pathname } = useLocation();
 
    const locationPath = pathname.split('/')

    const id = locationPath[2]

    const [evenements, setEvenements] = useState([])

    const [sportName, setSportName] = useState("")

    const refreshData = async () => {
        try {
            const data = await SportsAPI.findOneSport(id).then(response => {
                setEvenements(response.data.data.attributes.evenements.data)
                setSportName(response.data.data.attributes.nom)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        refreshData()
    }, [])

    return (
        <main className='sportEventsContainer'>
            <article>
                <h3>Tous les évenements {sportName} à venir </h3>
                <ul>
                    {
                        evenements.map((item, index) => {
                            console.log(item)
                            return (
                                <a href={`/event/${item.id}`}>
                                    <li key={index}>
                                        <div>
                                            <p>
                                                {
                                                    item.attributes.pays.data.map((item, index) => {

                                                        if (index === 0){
                                                            return (
                                                                <>
                                                                    <img src={`http://localhost:1337${item.attributes.drapeau.data[0].attributes.url}`}/>
                                                                    {" " + item.attributes.nom + " / "} 
                                                                </>
                                                            )
                                                        } else {
                                                            return (
                                                                <>
                                                                    {item.attributes.nom + " "}
                                                                    <img src={`http://localhost:1337${item.attributes.drapeau.data[0].attributes.url}`}/>
                                                                </>
                                                            )
                                                        }
                                                        
                                                    })
                                                }
                                            </p>
                                            <p>{item.attributes.localisation}</p>
                                        </div>
                                        <div>
                                            <p>{moment(item.attributes.date_debut).utcOffset(60).format('MMM Do YYYY')}</p>
                                            <p>{moment(item.attributes.date_debut).utcOffset(60).format('HH:mm')}h</p>
                                        </div>
                                    
                                        <div>
                                            <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} />
                                        </div>
                                        
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
