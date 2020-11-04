import Head from "next/head";
import GenericPage from "../components/GenericPage";

export default function Home() {
    return (
        <>
            <Head>
                <title>Hotel Dilivher :: Generic</title>
                <meta name="description" content="Hotel Dilivher WebSite" />
            </Head>
            <GenericPage />
        </>
    );
}
