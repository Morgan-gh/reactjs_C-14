import {URL_SPORTS, URL_ATHLETES, URL_EVENT} from "../Config/Config";
import axios from "axios";

function findSports(){
    return axios.get(`${URL_SPORTS}?populate=*`)
}
function bestPlayerFoot()
{
    return axios.get(`${URL_ATHLETES}?populate=*`)
}
function bestPlayer()
{
    return axios.get(`${URL_ATHLETES}?populate=votes`)
}
function sportOfBestPlayer(id)
{
    return axios.get(`${URL_ATHLETES}${id}?populate=sport`)
}
function bestEvent()
{
    return axios.get(`${URL_EVENT}?populate=votes`)
}


export default {
    findSports,
    bestPlayerFoot,
    bestPlayer,
    sportOfBestPlayer,
    bestEvent
}