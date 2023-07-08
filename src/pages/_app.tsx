import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

const FOOTBALL_API_TOKEN = process.env.NEXT_PUBLIC_FOOTBALL_API_TOKEN ?? "";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url) =>
          fetch(`/api${url}`, {
            headers: {
              "X-Auth-Token": FOOTBALL_API_TOKEN,
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
