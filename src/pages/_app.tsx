import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url) =>
          fetch(`/api${url}`, {
            headers: {
              "X-Auth-Token": "3f3bbf423ffa43288a918d5a957d93ce",
            },
          }).then((res) => res.json()),
      }}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  );
};

export default App;
