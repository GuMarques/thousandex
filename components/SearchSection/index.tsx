import { View, StyleSheet } from "react-native";
import Filters from "../Filters";
import SearchBar from "../SearchBar";
import useTheme from "../../theme/useTheme";

interface Props {
  setSortBy: (value: "name" | "number") => void;
  searchText: string;
  setSearchText: (value: string) => void;
}

const SearchSection = ({ setSortBy, searchText, setSearchText }: Props) => {
  const { currentTheme } = useTheme();

  const sortByName = (value: boolean) => {
    if (value) {
      setSortBy("name");
    } else {
      setSortBy("number");
    }
  };
  return (
    <View
      style={[
        { backgroundColor: currentTheme.COLORS.primary },
        styles.container,
      ]}
    >
      <SearchBar
        searchText={searchText}
        setSearchText={(value: string) =>
          setSearchText(value.toLocaleLowerCase())
        }
      />
      <Filters sortByName={sortByName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 16,
  },
});

export default SearchSection;
