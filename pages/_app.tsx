import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

interface PagePropsInterface extends AppProps {
  session?: any;
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: PagePropsInterface) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
