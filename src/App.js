import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./components/main/Main";
import { GlobalStyle } from "./GlobalStyle";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Main />
    </QueryClientProvider>
  );
}

export default App;
