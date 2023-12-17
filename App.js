import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import HomeScreen from "./screen/HomeScreen";
import Page from "./screen/Page";
import EditPage from "./screen/EditPage";
import { NavigationContainer } from "@react-navigation/native"; // navigation import
import { createStackNavigator } from "@react-navigation/stack"; //navigation import
import { AntDesign } from "@expo/vector-icons";
import ShopingCards from "./screen/Component/ShopingCards";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "ana sayfa", //gecidin adini deyir
            headerTransparent: true, //arxa fon rengini seffaf edir
            animationEnabled: false, //gecidin animationu false edir
            headerShadowVisible: false, //shadow kolgesini false etmek
            headerStyle: {
              // header stilenme islemleri
            },
            headerTitleStyle: {
              // stil islemler title hissesi
              color: "white",
            },
            headerTitleAlign: "center", //title yazisini ortalamaq
            headerLeft: () => (
              //header navigation sol terefe elaveler etmek
              <Image
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 50,
                  marginLeft: 10,
                }}
                source={{
                  uri: "https://th.bing.com/th/id/R.9e338757fa248e385f4fe3e6db2b6c87?rik=Ojlp4Hv%2bcaNyOA&pid=ImgRaw&r=0",
                }}
              />
            ),
            headerRight: () => (
              //header navigation sag terefe elaveler etmek
              <AntDesign
                style={{ marginRight: 10 }}
                name="bars"
                size={30}
                color="white"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Cards"
          component={Page}
          options={{
            animationEnabled: false,   
            headerLeft: null,
            title: null,
            headerShadowVisible: false, //shadow kolgesini false etmek
            headerTransparent: true, //arxa fon rengini seffaf edir
            headerTitleAlign: "center", //title yazisini ortalamaq
            headerTitleStyle: {
              // stil islemler title hissesi
              color: "blac",
              fontSize: 22,
              fontWeight: "bold",
            },
            headerRight: () => <ShopingCards />,
          }}
        />
        <Stack.Screen
          name="Edit Page"
          component={EditPage}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
