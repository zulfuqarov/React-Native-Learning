import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
// icons start
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
// swiper github link
// https://github.com/leecade/react-native-swiper/blob/master/examples/components/AutoPlay/index.tsx
// swiper github link
// data start
import { data } from "./Data/data";
// data end
const Page = () => {
  // const Rout = useRoute();
  const [Visible, setVisible] = useState(false);
  const [Burger, setBurger] = useState(false);
  const [Drink, setDrink] = useState(false);
  const [loaction, setloaction] = useState(false);
  const [Phone, setPhone] = useState(false);

  useEffect(() => {
    setVisible(false);
  }, []);

  const ClikBurger = () => {
    setBurger(true);
    setDrink(false);
    setloaction(false);
    setPhone(false);
    setVisible(true);
  };
  const ClikDrink = () => {
    setDrink(true);
    setloaction(false);
    setPhone(false);
    setBurger(false);
    setVisible(true);
  };
  const Clikloaction = () => {
    setloaction(true);
    setBurger(false);
    setDrink(false);
    setPhone(false);
    setVisible(true);
  };
  const ClikPhone = () => {
    setPhone(true);
    setloaction(false);
    setBurger(false);
    setDrink(false);
    setVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 200 }}>
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
      <View className=" flex-1">
        <View className="w-[100%]  h-[80px] flex flex-row justify-evenly items-center">
          <TouchableOpacity onPress={ClikBurger} className="w-[33px] h-[33px] ">
            <View className="w-[30px] h-[30px] ">
              <Ionicons name="fast-food" size={34} color="red" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ClikDrink} className="w-[33px] h-[33px] ">
            <View className="w-[30px] h-[30px] ">
              <Entypo name="drink" size={34} color="rgb(254 240 138)" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={Clikloaction}
            className="w-[33px] h-[33px] "
          >
            <View className="w-[30px] h-[30px] ">
              <FontAwesome name="map-marker" size={34} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ClikPhone} className="w-[33px] h-[33px] ">
            <View className="w-[30px] h-[30px] ">
              <Feather name="headphones" size={34} color="rgb(96 165 250)" />
            </View>
          </TouchableOpacity>
        </View>
        {Visible ? (
          <View className="flex-1 justify-center items-center">
            {Burger && (
              <ScrollView>
                <View className="flex-1 flex flex-row justify-between flex-wrap">
                  {data &&
                    data.map((oneData) => (
                      <Image
                        className="w-[175px] max-[375px]:w-[150px] h-[100px] m-[10px] rounded-[20px]"
                        source={{
                          uri: `${oneData.images[0].sm}`,
                        }}
                      />
                    ))}
                </View>
              </ScrollView>
            )}
            {Drink && <Text>Drink Seicldi</Text>}
            {loaction && <Text>Location Seicldi</Text>}
            {Phone && <Text>phone secildi</Text>}
          </View>
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text>Hecbir Category secilmeyib</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
