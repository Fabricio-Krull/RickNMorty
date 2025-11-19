import { useEffect, useState } from 'react';
import axios from 'axios';
import StylizedList from '../components/StylizedList';
import Loading from '../components/Loading.js';
import { TextInput, TouchableHighlight, View, Text } from 'react-native';


export default function CharacterListScreen({ navigation }) {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [query, setQuery] = useState("");

    const [page, setPage] = useState(1);

    const [status, setStatus] = useState("");

    const [statusEmoji, setStatusEmoji] = useState("👍");

    const setNewQuery = (search) => {
      if(search.length > 0){
        setQuery(`?name=${search}`);
      }
      else{
        setQuery("");
      }
    }

    const setNewStatus = () => {
      if(statusEmoji == "👍"){
        setStatus("?status=dead");
        setStatusEmoji("☠️");
      }
      else if(statusEmoji == "🤷"){
        setStatus("?status=alive");
        setStatusEmoji("👍");
      }
      else {
        setStatus("");
        setStatusEmoji("🤷");
      }
    }

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character${query}${status}`)
        .then(response => {
            setData(response.data.results);
        })
        .catch(error => {
            console.log("Error:", error);
        })
        .finally(() => {
          setLoading(false);
        })
    }, [query, status]);
    if(loading) return (
      <View>
        <Loading />
        <TextInput onChangeText={setNewQuery}
        style={{
          height: 40,
          width: '80%',
          borderColor: '#000000',
          borderWidth: 1,
          borderRadius: 5,
          alignSelf: 'center'
        }}
        placeholder="Filtrar por nome"/>
    </View>
  );

  return (
    <View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <TextInput onChangeText={setNewQuery}
        style={{
          height: 50,
          width: '80%',
          borderColor: '#000000',
          borderWidth: 1,
          borderRadius: 5,
          alignSelf: 'center'
        }}
        placeholder="Filtrar por nome"/>
        <TouchableHighlight style={{height: 50, width: 50, borderWidth: 1, borderRadius: 10}}
          onPress={setNewStatus}
        >
          <Text style={{fontSize: 35}}>{statusEmoji}</Text>
        </TouchableHighlight>
      </View>
      <StylizedList navigation={navigation} list={data}/>
    </View>
  );
}