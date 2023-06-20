import { View, Text, StyleSheet } from "react-native";
import useTheme from "../../theme/useTheme";
import capitalizeString from "../../helpers/capitalizeString";

interface Props {
  type: Type;
}

const TypeChip = ({ type }: Props) => {
  const { currentTheme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.COLORS.types[type] },
      ]}
    >
      <Text
        style={{
          color: currentTheme.COLORS.white,
          fontFamily: currentTheme.FONT.regular,
        }}
      >
        {capitalizeString(type)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default TypeChip;
