import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

type Props = {
  navigation: any;
};

export function HomeScreen({navigation}: Props) {
    const [message, setMessage] = useState("")
  return (
    <View style={{ flex: 1, alignItems: "center", padding: 10}}>
      <Text style={{ fontSize: 20 }}>Tela Inicial</Text>
      <Text style={{ margin: 10 }}>Mensagem atual: {message}</Text>

      <TextInput
        style={{
          width: "80%",
          borderWidth: 0.5,
          borderRadius: 5,
          padding: 8,
              }}
        placeholder="Digite a mensagem"
        value={message}
        onChangeText={setMessage}
      />

      <Button
        title="Ir para a outra tela"
        onPress={() => navigation.navigate("About", {message})}
      />
    </View>
  );
}
