import {QueryClient, QueryClientProvider} from "react-query";

const client = new QueryClient();

const App = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;

