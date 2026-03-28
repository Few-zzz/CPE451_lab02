import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        {/* ใช้ gap */}
        <Text style={styles.title}>ใช้ gap</Text>
        <View style={[styles.row, { gap: 15, backgroundColor: "#f6b6b6" }]}>
          <View style={[styles.box, { backgroundColor: "red" }]}><Text>1</Text></View>
          <View style={[styles.box, { backgroundColor: "green" }]}><Text>2</Text></View>
          <View style={[styles.box, { backgroundColor: "blue" }]}><Text>3</Text></View>
        </View>

        {/* ใช้ rowGap */}
        <Text style={styles.title}>ใช้ rowGap</Text>
        <View style={[styles.column, { rowGap: 20, backgroundColor: "#7db991" }]}>
          <View style={[styles.box, { backgroundColor: "orange" }]}><Text>A</Text></View>
          <View style={[styles.box, { backgroundColor: "purple" }]}><Text>B</Text></View>
          <View style={[styles.box, { backgroundColor: "pink" }]}><Text>C</Text></View>
        </View>

        {/* ใช้ columnGap */}
        <Text style={styles.title}>ใช้ columnGap</Text>
        <View style={[styles.row, { columnGap: 25, backgroundColor: "#03a9f4" }]}>
          <View style={[styles.box, { backgroundColor: "brown" }]}><Text>X</Text></View>
          <View style={[styles.box, { backgroundColor: "yellow" }]}><Text>Y</Text></View>
          <View style={[styles.box, { backgroundColor: "cyan" }]}><Text>Z</Text></View>
        </View>

        {/* วิธีดั้งเดิม: ใช้ margin */}
        <Text style={styles.title}>ใช้ margin (แทน gap)</Text>
        <View style={[styles.row, { backgroundColor: "#9c27b0" }]}>
          <View style={[styles.box, { backgroundColor: "red", marginRight: 15 }]}><Text>1</Text></View>
          <View style={[styles.box, { backgroundColor: "green", marginRight: 15 }]}><Text>2</Text></View>
          <View style={[styles.box, { backgroundColor: "blue" }]}><Text>3</Text></View>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 10,
  },
  column: {
    flexDirection: "column",
    marginBottom: 20,
    padding: 10,
  },
  box: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  }
});