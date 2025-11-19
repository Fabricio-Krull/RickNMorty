import { FlatList, Text, TouchableHighlight, View, Image } from 'react-native';

export default function StylizedList({ list, navigation }) {

  return (
    <View >
        <FlatList
            data={list}
            style={{
                height: '90%'
            }}
            renderItem={({ item }) => (
                
                <TouchableHighlight
                onPress={() => {
                    navigation.navigate("Details", {id: item.id});
                }}
                underlayColor={"#8E57F7"}
                style={{
                    margin: 5,
                    padding: 1,
                    borderWidth: 0.5,
                    borderRadius: 7
                }}
                >
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <Image source={{uri: item.image}} 
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 10
                            }}
                        />
                        <View style={{ marginLeft: 5 }}>
                            <Text style={{ marginTop: 5}}>Nome: {item.name}</Text>
                            <Text >Status: {item.status}</Text>
                            <Text >Species: {item.species}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
        />

    </View>
  );
}