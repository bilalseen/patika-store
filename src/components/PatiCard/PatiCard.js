import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./PatiCard.style";

const patiCard = (products) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.top}>
        <Image style={styles.tinyLogo} source={{uri: products.imgURL}}></Image>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.title}>{products.title}</Text>
          <Text style={styles.price}>{products.price}</Text>
          <Text style={styles.inStock}>{products.inStock}</Text>
        </View>
      </View>
    </View>
  );
};

export default patiCard;
