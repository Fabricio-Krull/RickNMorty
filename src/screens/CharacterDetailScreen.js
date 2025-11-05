import { FlatList, Text, TouchableHighlight, View } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StylizedList from '../components/StylizedList';

export default function ClassesList({ navigation, route }) {

    const { id: characterId } = route.params;

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => {
            setData(response.result);
        })
        .catch(error => {
            console.log("Error:", error);
        });
    }, []);

  return (
    // A imagem maior.

    // Nome completo.

    // Status, Espécie, Gênero.

    // Localização de Origem (origin.name).

    // Localização Atual (location.name).
    <View>

        <Image src={`${data.image}`} />
        <Text >Nome: {item.name}</Text>
        <Text >Status: {item.status}</Text>
        <Text >Espéice: {item.species}</Text>
        <Text >Gênero: {item.gender}</Text>
        <Text >Origem: {item.origin.name}</Text>
        <Text >Localização atual: {item.location.name}</Text>

    </View>

  );
}