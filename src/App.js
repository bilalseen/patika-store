import React from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import products_data from "./products_data.json";
import PatiCard from "./components/PatiCard";

function App() {
  const url = "./51uguxa9nYL._AC._SR360,460.jpg";
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>PATIKASTORE</Text>
        <TextInput style={styles.search_bar} placeholder="Ara..."></TextInput>
      </View>
      <ScrollView style={styles.scrollView}>
        <PatiCard
          title="Samsung Galaxy"
          price="62.920"
          inStock="STOKTA YOK"
        />

        {/* <View style={styles.scroll_screen}></View> */}
        {/* <FlatList
          data={products_data}
          renderItem={({ item }) => (
            <PatiCard
              imgURL={item.imgURL}
              title={item.title}
              price={item.price}
              inStock={item.inStock}
            />
          )}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  header: {
    padding: 10,
  },
  header_text: {
    color: "#800080",
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
    marginLeft: 0,
  },
  search_bar: {
    padding: 10,
    backgroundColor: "#ECEFF1",
    borderRadius: 10,
  },
  scroll_screen: {
    flexDirection: "row",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    backgroundColor: "grey",
  },
});

export default App;
