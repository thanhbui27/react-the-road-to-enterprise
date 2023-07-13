import Header from "@/components/header/Header";
import Home, { getStaticProps } from "@/pages";
import MyApp from "@/pages/_app";
import About from "@/pages/about";
import { AppProps } from "next/app";

export default function App(props: AppProps) {
  console.log(getStaticProps);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <MyApp {...props} /> */}
      <Home {...getStaticProps} />
    </main>
  );
}
