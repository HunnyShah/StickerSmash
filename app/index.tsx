import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: 200 }}>Hello</Text>
      <Link href={"/about"}>
        <Text style={{ fontSize: 20, color: "blue" }}>Go to about</Text>
      </Link>
    </View>
  );
};

export default Index;
