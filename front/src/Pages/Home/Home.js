import React, { useEffect, useState } from 'react'
import SportsAPI from '../../Services/SportsAPI.js'
import './Home.css'
import moment from "moment";
import {URL_ATHLETES, URL_EVENT} from "../../Config/Config";
export default function Home() {

    const [bestPlayer, setBestPlayer] = useState()
    const [bestPlayerId, setBestPlayerId]=useState()
    const [sportOfBestPlayer,setSportOfBestPlayer]=useState()
    const[bestEvent,setBestEvent]=useState()
    let count=0
    let countEvent=0

    useEffect(() => {
        fetch("http://localhost:1337/api/althletes/?populate=votes")
        .then(response => {return (response.json())})
            .then(res=>{
                res.data.map( oneData => {
                    if (oneData.attributes.votes.data.length > count) {
                        setBestPlayer(oneData)
                        count = oneData.attributes.votes.data.length
                        setBestPlayerId(oneData.id)
                    }
                })

            })
    } ,[])
   /* console.log(bestPlayerId)
    useEffect(()=> {
        setTimeout(() => {
            fetch(`http://localhost:1337/api/althletes/${bestPlayerId}/?populate=sport`)
                .then(response => {
                    return response.json()
                })
                .then(response => {
                })
        }, 1000)
    },[])*/

    useEffect(()=> {
        fetch("http://localhost:1337/api/evenements/?populate=votes")
            .then(response =>{return (response.json())})
            .then(response=> {
            response.data.map(oneData=> {
                if(oneData.attributes.votes.data.length>countEvent)
                {
                    setBestEvent(oneData)
                   countEvent=oneData.attributes.votes.data.length
                }

            })
        })
    },[])
    return (
            <div>
                <div>
                    <h3>Athlete favoris des jeux olympiques</h3>
                    <p>Nom : {bestPlayer.attributes.nom}</p>
                    <p>Prénom : {bestPlayer.attributes.prenom}</p>
                </div>
                <div>
                    <h3>Evenement favoris des jeux olympiques</h3>
                    <p>{bestEvent.attributes.nom}</p>
                    <p>Lieu : {bestEvent.attributes.lieu}</p>
                </div>

            </div>

        )
}
