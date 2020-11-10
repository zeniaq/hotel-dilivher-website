import Head from "next/head";
import TablesPage from "../components/TablesPage";

export default function Home() {
    return (
        <>
            <Head>
                <title>Hotel Dilivher :: Table</title>
                <meta name="description" content="Hotel Dilivher WebSite" />
            </Head>
            <TablesPage/>
        </>
    );
}
