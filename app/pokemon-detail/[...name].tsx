// @ts-nocheck
import { Stack, useRouter, useSearchParams } from "expo-router";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import useTheme from "../../theme/useTheme";
import icons from "../../helpers/icons";
import capitalizeString from "../../helpers/capitalizeString";
import silhouette from "../../assets/images/silhouette.png";
import TypeChip from "../../components/TypeChip";
import Stats from "../../components/Stats";

const PokemonDetail = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { fetchDetails } = useFetch();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const { currentTheme } = useTheme();
  const primaryColor = currentTheme.COLORS.types[params.name[2]];
  useEffect(() => {
    const fetch = async () => {
      if (typeof params.name[0] === "string") {
        const res = await fetchDetails(params.name[0]);
        setPokemon(res);
      }
    };
    fetch();
  }, []);
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: currentTheme.COLORS.white }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => router.back()}>
              <Image
                source={icons.chevron_left}
                resizeMode="cover"
                style={styles.btnImg}
              />
            </TouchableWithoutFeedback>
          ),
          headerRight: () => (
            <Text style={styles.numberText}>#{params.name[1]}</Text>
          ),
          headerTitle: capitalizeString(params?.name[0]),
          headerTitleStyle: {
            fontSize: currentTheme.SIZE.xLarge,
            fontFamily: currentTheme.FONT.bold,
          },
          headerTintColor: currentTheme.COLORS.white,
        }}
      />
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={styles.container}
      >
        <View style={[styles.background, { backgroundColor: primaryColor }]} />
        <Image
          style={styles.image}
          source={{ uri: pokemon?.image }}
          defaultSource={silhouette}
        />
        <View style={styles.typescontainer}>
          <TypeChip type={params.name[2]} />
          {params.name[3] !== "undefined" && <TypeChip type={params.name[3]} />}
        </View>
        <View>
          <Text style={[styles.aboutText, { color: primaryColor }]}>About</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoWrapper}>
              <View style={styles.iconContainer}>
                <Image
                  source={icons.weight}
                  resizeMode="cover"
                  style={styles.iconImg}
                />
                {pokemon?.weight && (
                  <Text style={styles.infoText}>{pokemon?.weight / 10} kg</Text>
                )}
              </View>
              <Text style={styles.infoTitle}>Weight</Text>
            </View>
            <View style={styles.itemSeparator} />
            <View style={styles.infoWrapper}>
              <View style={styles.iconContainer}>
                <Image
                  source={icons.straighten}
                  resizeMode="cover"
                  style={styles.iconImg}
                />
                {pokemon?.height && (
                  <Text style={styles.infoText}>{pokemon?.height / 10} m</Text>
                )}
              </View>
              <Text style={styles.infoTitle}>Height</Text>
            </View>
            <View style={styles.itemSeparator} />
            <View style={styles.infoWrapper}>
              <View>
                <Text style={styles.infoText}>
                  {capitalizeString(pokemon?.abilities[0] || "")}
                </Text>
                {pokemon?.abilities[1] && (
                  <Text style={styles.infoText}>
                    {capitalizeString(pokemon?.abilities[1] || "")}
                  </Text>
                )}
              </View>
              <Text style={styles.infoTitle}>Abilities</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.description}>{pokemon?.description}</Text>
        </View>
        <View>
          <Stats
            hp={pokemon?.stats.hp}
            attack={pokemon?.stats.attack}
            defense={pokemon?.stats.defense}
            specialattack={pokemon?.stats.specialattack}
            specialdefense={pokemon?.stats.specialdefense}
            speed={pokemon?.stats.speed}
            color={primaryColor}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnImg: {
    width: 32,
    height: 32,
  },
  iconImg: {
    width: 22,
    height: 22,
  },
  image: {
    width: 250,
    height: 250,
    zIndex: 1,
  },
  container: {
    alignItems: "center",
    position: "relative",
  },
  typescontainer: {
    flexDirection: "row",
    gap: 24,
    zIndex: 1,
    marginTop: 12,
    marginBottom: 16,
  },
  background: {
    height: 200,
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 0,
  },
  aboutText: {
    fontFamily: "Medium",
    fontSize: 22,
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
  },
  itemSeparator: {
    width: 1,
    height: "100%",
    backgroundColor: "gray",
  },
  infoText: {
    fontFamily: "Regular",
    fontSize: 16,
    textAlign: "center",
  },
  infoTitle: {
    fontFamily: "Medium",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 4,
    marginTop: 8,
  },
  infoWrapper: {
    justifyContent: "space-between",
    width: "30%",
  },
  description: {
    fontFamily: "Regular",
    fontSize: 14,
    paddingHorizontal: 10,
    marginTop: 12,
  },
  numberText: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 16,
  },
});

export default PokemonDetail;
