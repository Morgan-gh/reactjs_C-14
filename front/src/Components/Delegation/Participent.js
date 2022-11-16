import {useEffect, useState} from 'react';
import axios from 'axios'
import { URL_PAYS } from "../../Config/Config"

export default function Delegation() {
    const [pays, setPays] = useState([]);

    const refreshData = async () => {
        const res = await axios.get(URL_PAYS);
        setPays(res.data.data);
        console.log(res.data.data);
    }

    useEffect(() => {
        refreshData();
    }, []);

    return (
        <main style={{display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '5vh'}}>
            <h1>Délégation</h1>
            <ul style={{display: 'grid', gridTemplateColumns: 'repeat(4, 200px)', margin: 'auto', listStyle: 'none', marginTop: '-2vh', gap: '1em'}}>
                {pays.map((pays) => (
                    <button key={pays.id} style={{border: 'solid', borderRadius: '1vh 1vh 3vh 3vh', padding: '3vh', display: 'flex', flexDirection: 'column', gap: '2vh'}}>
                        <img src={pays.attributes.drapeau} alt={pays.attributes.nom} />
                        <p style={{textTransform: 'uppercase'}}>{pays.attributes.nom}</p>
                    </button>
                ))}
            </ul>
        </main>
    );
}