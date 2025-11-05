import { FlatList, Text, TouchableHighlight, View, Image } from 'react-native';

export default function StylizedList({ list, navigation }) {

  return (
    <View >
        <FlatList
            data={list}
            renderItem={({ item }) => (
                
                <TouchableHighlight onPress={() => {
                    navigation.navigate("Detail", {id: item.id});
                }}>
                    <View>
                        <Image src={`${item.image}`}/>
                        <Text >Nome: {item.name}</Text>
                        <Text >Status: {item.status}</Text>
                        <Text >Species: {item.species}</Text>
                    </View>
                </TouchableHighlight>
                
            )}
                contentContainerStyle={{ paddingBottom: 20 }}
        />

    </View>
  );
}