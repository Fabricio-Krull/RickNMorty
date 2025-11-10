import { FlatList, Text, TouchableHighlight, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading.js';
import axios from 'axios';

export default function CharacterDetailScreen({ route }) {

    const characterId = route.params.id;

    const [data, setData] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => {
            setData(response.data);
            // alert(response.data.name);
        })
        .catch(error => {
            console.log("Error:", error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);
    if(loading) return <Loading />
  return (
    // A imagem maior.

    // Nome completo.

    // Status, Espécie, Gênero.

    // Localização de Origem (origin.name).

    // Localização Atual (location.name).
    <View>

        <Image source={{uri: data.image}} />
        <Text >Nome: {data.name}</Text>
        <Text >Status: {data.status}</Text>
        <Text >Espécie: {data.species}</Text>
        <Text >Gênero: {data.gender}</Text>
        <Text >Origem: {data.origin?.name}</Text>
        <Text >Localização atual: {data.location?.name}</Text>

    </View>

  );
}