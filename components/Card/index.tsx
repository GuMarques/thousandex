import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import TypeChip from "../TypeChip/index";
import useTheme from "../../theme/useTheme";
import capitalizeString from "../../helpers/capitalizeString";
import silhouette from "../../assets/images/silhouette.png";
import { useRouter } from "expo-router";

interface Props {
  img: string;
  number: number;
  name: string;
  types: Array<Type>;
}

const Card = ({ img, number, name, types }: Props) => {
  const router = useRouter();

  const { currentTheme } = useTheme();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        router.push(`/pokemon-detail/${name}/${number}/${types[0]}/${types[1]}`)
      }
    >
      <View
        style={[
          { backgroundColor: currentTheme.COLORS.white },
          styles.container,
        ]}
      >
        <Text
          style={[styles.number, { color: currentTheme.COLORS.gray.medium }]}
        >
          #{number}
        </Text>
        <Image
          style={styles.image}
          source={{ uri: img }}
          defaultSource={silhouette}
        />
        <View style={styles.typesContainer}>
          {types.map((type) => (
            <TypeChip type={type} key={type} />
          ))}
        </View>
        <Text style={styles.name}>{capitalizeString(name)}</Text>
        <View style={styles.background} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 185,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    position: "relative",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  number: {
    textAlign: "right",
    fontFamily: "Regular",
    alignSelf: "flex-end",
  },
  image: {
    width: 130,
    height: 130,
    marginBottom: 8,
  },
  name: {
    fontFamily: "Medium",
    textAlign: "center",
    marginTop: 8,
    fontSize: 16,
  },
  background: {
    height: 95,
    backgroundColor: "#EFEFEF",
    position: "absolute",
    width: 185,
    bottom: 0,
    zIndex: -1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  typesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
});

export default Card;
