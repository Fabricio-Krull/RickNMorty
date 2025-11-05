import { useEffect, useState } from 'react';
import axios from 'axios';
import StylizedList from '../components/StylizedList';

export default function ClassesList({ navigation }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character`)
        .then(response => {
            setData(response.result);
        })
        .catch(error => {
            console.log("Error:", error);
        });
    }, []);

  return (
    <StylizedList navigation={navigation} list={data}/>
  );
}