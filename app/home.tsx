import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { Stack } from "expo-router";
import useTheme from "../theme/useTheme";
import SearchSection from "../components/SearchSection";
import { StatusBar } from "expo-status-bar";
import icons from "../helpers/icons";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

const Home = () => {
  const { currentTheme } = useTheme();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"number" | "name">("number");
  const [sortedPokemons, setSortedPokemons] = useState<Array<Card>>([]);

  const { data, isLoading, fetchCard, reFetch } = useFetch();

  useEffect(() => {
    if (sortBy === "number") {
      setSortedPokemons(
        data
          .sort((a, b) => {
            return a.number - b.number;
          })
          .filter((value) => {
            if (search === "") return value;
            return value.name.toLocaleLowerCase().includes(search);
          })
      );
    } else {
      setSortedPokemons(
        data
          .sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .filter((value) => {
            if (search === "") return value;
            return value.name.toLocaleLowerCase().includes(search);
          })
      );
    }
  }, [data, sortBy, search]);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: currentTheme.COLORS.white }}
    >
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: currentTheme.COLORS.primary,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <Image
              source={icons.pokeball}
              resizeMode="cover"
              style={styles.btnImg}
            />
          ),
          headerTitle: "Thousendex",
          headerTitleStyle: {
            fontSize: currentTheme.SIZE.xLarge,
            fontFamily: currentTheme.FONT.bold,
          },
          headerTintColor: currentTheme.COLORS.white,
        }}
      />
      <SearchSection
        setSortBy={setSortBy}
        setSearchText={setSearch}
        searchText={search}
      />
      <FlatList
        refreshing={isLoading}
        onRefresh={() => reFetch()}
        style={{ paddingTop: 12 }}
        contentContainerStyle={{ alignItems: "center" }}
        data={sortedPokemons}
        numColumns={2}
        onEndReached={() => fetchCard()}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item, index }) => (
          <View
            style={index % 2 === 0 ? { paddingRight: 4 } : { paddingLeft: 4 }}
          >
            <Card
              key={item.number}
              name={item.name}
              number={item.number}
              img={item.image}
              types={item.type}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnImg: {
    width: 24,
    height: 24,
  },
});

export default Home;
