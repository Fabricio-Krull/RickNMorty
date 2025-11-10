import { useEffect, useState } from 'react';
import axios from 'axios';
import StylizedList from '../components/StylizedList';
import Loading from '../components/Loading.js';

export default function CharacterListScreen({ navigation }) {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character`)
        .then(response => {
            setData(response.data.results);
        })
        .catch(error => {
            console.log("Error:", error);
        })
        .finally(() => {
          setLoading(false);
        })
    }, []);
    <Loading />
  if(loading) return <Loading />
  return (
    <StylizedList navigation={navigation} list={data}/>
  );
}