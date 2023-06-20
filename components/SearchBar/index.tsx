import { View, StyleSheet, TextInput } from "react-native";
import useTheme from "../../theme/useTheme";

interface Props {
  searchText: string;
  setSearchText: (value: string) => void;
}

const SearchBar = ({ searchText, setSearchText }: Props) => {
  const { currentTheme } = useTheme();
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.searchInput]}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        placeholder="Arcanine"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontFamily: "Medium",
  },
  container: {
    flex: 1,
  }
});

export default SearchBar;
