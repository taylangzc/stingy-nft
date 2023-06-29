import Sidebar from "@/collections/Sidebar/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const font = Montserrat({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div>
          <main style={{ display: "flex" }} className={`${font.className}`}>
            <Sidebar />
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
