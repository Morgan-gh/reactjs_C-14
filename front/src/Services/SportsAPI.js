/* Import axios */
import axios from "axios";

/* Import de l'URL */
import { URL_SPORTS } from "../Config/Config";

/**
 * Function findSports : GET tous les sports
 * return response axios : array
 */
function findSports(){
    return axios.get(`${URL_SPORTS}?populate=*`)
}

/**
 * Function findOneSport : GET un sport 
 * PARAM : ID
 * return response axios : array
 */
 function findOneSport(id){
    return axios.get(`${URL_SPORTS}/${id}?populate[evenements][populate][pays][populate]=drapeau&populate[evenements][populate]=image`)
}

/* Export des fonctions */
export default {
    findSports,
    findOneSport
}