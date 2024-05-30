import React, { useEffect } from "react";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";
import { createDB, loadExtension } from "./Database";

export default function App() {
  useEffect(() => {
    createDB();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-neutral-900">
      <ScrollView>
        <View className="flex-row p-2 bg-neutral-800 items-center">
          <Text className={"font-bold flex-1 text-white"}>Tools</Text>
        </View>
        <Button title="Load extension" onPress={loadExtension} />
      </ScrollView>
    </SafeAreaView>
  );
}
