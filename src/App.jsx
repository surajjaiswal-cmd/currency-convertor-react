import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Convertor from "./components/Convertor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Convertor />
    </QueryClientProvider>
  );
}

export default App;
