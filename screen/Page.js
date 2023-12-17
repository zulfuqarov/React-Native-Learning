import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import ShopingCards from "./Component/ShopingCards";
import Swiper from "react-native-swiper";

// swiper github link
// https://github.com/leecade/react-native-swiper/blob/master/examples/components/AutoPlay/index.tsx
// swiper github link

const Page = () => {
  // const Rout = useRoute();

  return (
    <View style={{ flex: 1 }}>
      <ShopingCards />
      <View style={{height: 200 }}>
        <Swiper
          showsButtons={true}
          buttonWrapperStyle={{
            height: 200,
          }}
          showsPagination={false}
          autoplay={true}
        >
          <ImageBackground
            source={{
              uri: "https://th.bing.com/th/id/R.9a41b82f5c7d4449b0686ce17a787387?rik=9vZ6WkiQEFp2TQ&riu=http%3a%2f%2fwww.smart-restaurants.co.uk%2fsr2016%2fwp-content%2fuploads%2f2016%2f08%2fburger-app-banner.jpg&ehk=hUvaBnSCP%2bDNQWONAdkWhIKZ04ngy6OWn11Todrv5nQ%3d&risl=&pid=ImgRaw&r=0",
            }}
            style={{
              width: "100%",
              height: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
              Shopping Cards
            </Text>
          </ImageBackground>
          <ImageBackground
            source={{
              uri: "https://th.bing.com/th/id/OIP.rzsyqMRG0sZttOnq_8QSSwHaFC?rs=1&pid=ImgDetMain",
            }}
            style={{
              width: "100%",
              height: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
              Best Burger
            </Text>
          </ImageBackground>
          <ImageBackground
            source={{
              uri: "https://undergroundchucks.com/wp-content/uploads/2021/06/the-Meat-grinder-1024x683.jpg",
            }}
            style={{
              width: "100%",
              height: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
              discounted Burger !
            </Text>
          </ImageBackground>
        </Swiper>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
