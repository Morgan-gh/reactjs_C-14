/* Import axios */
import axios from "axios";

/* Import de l'URL */
import { URL_ATHLETE } from "../Config/Config";

function findMostVoted(){
    return axios.get(`${URL_ATHLETE}?populate=votes`)
}

export default {
    findMostVoted
}