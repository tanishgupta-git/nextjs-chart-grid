import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { ApolloProvider,ApolloClient, InMemoryCache } from "@apollo/client";



// apollo client connection
const client = new ApolloClient({
  uri: "https://fakeql.com/graphql/7f34cabad17619df2f2d28a8592e1bd5",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default MyApp
