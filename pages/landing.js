import Head from "next/head";
import LandingPage from "../components/LandingPage";

export default function Home() {
    return (
        <>
            <Head>
                <title>Hotel Dilivher :: Landing</title>
                <meta name="description" content="Hotel Dilivher WebSite" />
            </Head>
            <LandingPage />
        </>
    );
}
