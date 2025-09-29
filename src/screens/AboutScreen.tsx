import React from "react";
import { View, Text, Button } from "react-native";

type Props = {
  navigation: any;
  message: string;
};

export function AboutScreen({ navigation, route }: any) {
    const { message } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", padding: 10}}>
      <Text style={{ fontSize: 20, margin: 5 }}>Tela About</Text>
      <Text> Mensagem recebida: {message}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
