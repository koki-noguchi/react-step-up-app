import { Button, ChakraProvider } from "@chakra-ui/react";
import "./styles.css";
import thema from "./theme/theme";

export default function App() {
  return (
    <ChakraProvider theme={thema}>
      <Button colorScheme="teal">ボタン</Button>
    </ChakraProvider>
  );
}
