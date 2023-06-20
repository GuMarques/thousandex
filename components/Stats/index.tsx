import { View, Text, StyleSheet } from "react-native";
import useTheme from "../../theme/useTheme";

interface Props {
  hp: number;
  attack: number;
  specialattack: number;
  defense: number;
  specialdefense: number;
  speed: number;
  color: string;
}

const Stats = ({
  hp,
  attack,
  specialattack,
  defense,
  specialdefense,
  speed,
  color,
}: Props) => {
  const { currentTheme } = useTheme();
  return (
    <View style={{ width: "100%", alignContent: "stretch" }}>
      <Text style={[styles.title, { color }]}>Base Stats</Text>
      <View style={styles.statContainer}>
        <View style={{ alignItems: "flex-end" }}>
          <View style={{ flexDirection: "row" }}>
            <Text>HP</Text>
            <View style={styles.itemSeparator} />
            <Text>{hp}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>ATK</Text>
            <View style={styles.itemSeparator} />
            <Text>{attack}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>DEF</Text>
            <View style={styles.itemSeparator} />
            <Text>{defense}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>SATK</Text>
            <View style={styles.itemSeparator} />
            <Text>{specialattack}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>SDEF</Text>
            <View style={styles.itemSeparator} />
            <Text>{specialdefense}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>SPD</Text>
            <View style={styles.itemSeparator} />
            <Text>{speed}</Text>
          </View>
        </View>
        <View style={{ flex: 1, height: "100%", gap: 11, marginTop: 10 }}>
          <View
            style={[
              styles.statBarBackground,
              { backgroundColor: currentTheme.COLORS.gray.light },
            ]}
          >
            <View
              style={[
                styles.statBar,
                { backgroundColor: color, width: (hp * 100) / 255 + "%" },
              ]}
            />
          </View>
          <View
            style={[
              styles.statBarBackground,
              { backgroundColor: currentTheme.COLORS.gray.light },
            ]}
          >
            <View
              style={[
                styles.statBar,
                { backgroundColor: color, width: (attack * 100) / 255 + "%" },
              ]}
            />
          </View>
          <View
            style={[
              styles.statBarBackground,
              { backgroundColor: currentTheme.COLORS.gray.light },
            ]}
          >
            <View
              style={[
                styles.statBar,
                { backgroundColor: color, width: (defense * 100) / 255 + "%" },
              ]}
            />
          </View>
          <View
            style={[
              styles.statBarBackground,
              { backgroundColor: currentTheme.COLORS.gray.light },
            ]}
          >
            <View
              style={[
                styles.statBar,
                { backgroundColor: color, width: (specialattack * 100) / 255 + "%" },
              ]}
            />
          </View>
          <View
            style={[
              styles.statBarBackground,
              { backgroundColor: currentTheme.COLORS.gray.light },
            ]}
          >
            <View
              style={[
                styles.statBar,
                { backgroundColor: color, width: (specialdefense * 100) / 255 + "%" },
              ]}
            />
          </View>
          <View
            style={[
              styles.statBarBackground,
              { backgroundColor: currentTheme.COLORS.gray.light },
            ]}
          >
            <View
              style={[
                styles.statBar,
                { backgroundColor: color, width: (speed * 100) / 255 + "%" },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statContainer: {
    flexDirection: "row",
    alignContent: "stretch",
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  itemSeparator: {
    width: 1,
    height: "100%",
    backgroundColor: "gray",
    marginHorizontal: 6,
  },
  statBarBackground: {
    height: 6,
    borderRadius: 4,
  },
  statBar: {
    height: 6,
    borderRadius: 4,
  },
  title: {
    fontFamily: "Medium",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
  },
});

export default Stats;
