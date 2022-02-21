import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

import Head from "next/head";

export function Layout({ children }) {
  return <>
    <Head>
        <title>PokeDesk</title>
        <link rel="icon" href="/images/favicon.ico" />
    </Head>
    <Navbar/>
    <main className="main-container">
        {children}
    </main>
    <Footer/>
    </>
}
