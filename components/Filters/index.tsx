import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableWithoutFeedback,
  Switch,
} from "react-native";
import icons from "../../helpers/icons";
import { useState } from "react";
import useTheme from "../../theme/useTheme";

interface Props {
  sortByName: (value: boolean) => void;
}

const Filters = ({ sortByName }: Props) => {
  const [visible, setVisible] = useState(false);
  const [orderByName, setOrderByName] = useState(false);
  const { currentTheme } = useTheme();

  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={() => setVisible(true)}>
        <View style={styles.buttonContainer}>
          <Image
            source={orderByName ? icons.text_format : icons.tag}
            resizeMode="cover"
            style={styles.btnImg}
          />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}
        transparent={true}
      >
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Sort by:</Text>
                <View style={styles.modalToggleContainer}>
                  <Image
                    source={icons.tag}
                    resizeMode="cover"
                    style={styles.btnImg}
                  />
                  <Text style={styles.toggleText}>Number</Text>
                  <Switch
                    value={orderByName}
                    onValueChange={(value) => {
                      setOrderByName(value);
                      setVisible(false);
                      sortByName(!value)
                    }}
                    ios_backgroundColor={currentTheme.COLORS.primary}
                    trackColor={{
                      false: currentTheme.COLORS.primary,
                      true: currentTheme.COLORS.primary,
                    }}
                  />
                  <Text style={styles.toggleText}>Name</Text>
                  <Image
                    source={icons.text_format}
                    resizeMode="cover"
                    style={styles.btnImg}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "white",
    padding: 3,
    borderRadius: 20,
    justifyContent: "center",
    aspectRatio: 1,
    alignItems: "center",
  },
  btnImg: {
    width: 24,
    height: 24,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "transparent",
  },
  modalContainer: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 8,
  },
  modalToggleContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
    alignItems: "center",
    gap: 8,
  },
  modalTitle: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 18,
  },
  toggleText: {
    fontFamily: "Regular",
    fontSize: 14,
  },
});

export default Filters;
