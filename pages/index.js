import Head from "next/head";
import IndexPage from "../components/IndexPage";

export default function Home() {
    return (
        <>
            <Head>
                <title>Hotel Dilivher :: Home</title>
                <meta name="description" content="Hotel Dilivher WebSite" />
            </Head>
            <IndexPage />
        </>
    );
}
