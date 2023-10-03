import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const isHomePage = pathname === "/";
  return (
    <MantineProvider
      forceColorScheme={isHomePage ? "dark" : undefined}
      defaultColorScheme="auto"
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
