import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import Header from "../components/Header"
import Bottom from "../components/Bottom"
import Head from "next/head"

const NEXT_PUBLIC_Application_ID = process.env.NEXT_PUBLIC_APP_ID
const NEXT_PUBLIC_Dapp_URL = process.env.NEXT_PUBLIC_SERVER_URL
function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>NFT MarketPlace</title>
                <meta name="description" content="2" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider appId={NEXT_PUBLIC_Application_ID} serverUrl={NEXT_PUBLIC_Dapp_URL}>
                <NotificationProvider>
                    <Header />
                    <Component {...pageProps} />
                    <Bottom />
                </NotificationProvider>
            </MoralisProvider>
        </div>
    )
}

export default MyApp
