import { FlatList, Text, TouchableHighlight, View, Image } from 'react-native';

export default function StylizedList({ list, navigation }) {

  return (
    <View >
        <FlatList
            data={list}
            renderItem={({ item }) => (
                
                <TouchableHighlight
                onPress={() => {
                    navigation.navigate("Details", {id: item.id});
                }}
                underlayColor={"#8E57F7"}
                style={{
                    margin: 15,
                    padding: 1,
                    borderWidth: 0.5,
                    borderRadius: 7
                }}
                >
                    <View>
                        <Image source={{uri: item.image}} />
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