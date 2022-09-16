import Head from "next/head"
import styles from "../styles/Home.module.css"
// import Header from "../components/ManualHeader"
import { useMoralisQuery, useMoralis } from "react-moralis"
import NFTBox from "../components/NFTBox"
import { useNotification } from "web3uikit"

export default function Home() {
    const dispatch = useNotification()
    const deployNetwork = "EthereumArbitrum"
    const networks = {
        EthereumTestRinkeby: {
            chainId: `0x${Number(42).toString(16)}`,
        },
        EthereumMainNet: {
            chainId: `0x${Number(1).toString(16)}`,
        },
        EthereumArbitrum: {
            chainId: `0x${Number(42161).toString(16)}`,
        },
    }
    const chainIds = `0x${Number(137).toString(16)}`
    const rpcURL = "https://polygon-rpc.com"
    const networkName = "Polygon Mainnet"
    const currencyName = "MATIC"
    const currencySymbol = "MATIC"
    const explorerURL = "https://polygonscan.com/"
    const addNetwork = async () => {
        try {
            if (!window.ethereum) {
                console.error("Metamask not detected")
                return
            }
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        chainId: chainIds,
                        chainName: networkName,
                        rpcUrls: [rpcURL],
                        blockExplorerUrls: [explorerURL],
                        nativeCurrency: {
                            name: currencyName,
                            symbol: currencySymbol, // 2-6 characters long
                            decimals: 18,
                        },
                    },
                ],
            })
        } catch (err) {}
    }
    // const changeNetwork = async () => {
    //     try {
    //         if (!window.ethereum) {
    //         }
    //         await window.ethereum.request({
    //             method: "wallet_switchEthereumChain",
    //             params: [
    //                 {
    //                     ...networks[deployNetwork],
    //                 },
    //             ],
    //         })
    //     } catch (err) {}
    // }
    const { chainId, isWeb3Enabled } = useMoralis()
    console.log(chainId)
    const chainString = chainId ? parseInt(chainId).toString() : "137"
    console.log(chainString)
    if (chainString != "137") {
        addNetwork()
    }
    const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
        // TableName
        // Function for the query
        "ActiveItem",
        (query) => query.limit(10).descending("tokenId")
    )
    console.log(listedNfts)
    return (
        <div className="text-stone-800 mx-auto ">
            <h1 className="py-4 px-4">NFT Market Recently Listed</h1>
            <div className="flex-wrap flex items-center justify-center">
                {listedNfts.map((nft) => {
                    console.log(nft.attributes)
                    const { price, nftAddress, tokenId, marketplaceAddress, seller } =
                        nft.attributes
                    return (
                        <NFTBox
                            price={price}
                            nftAddress={nftAddress}
                            tokenId={tokenId}
                            marketplaceAddress={marketplaceAddress}
                            seller={seller}
                            key={`${nftAddress}${tokenId}`}
                        />
                    )
                })}
            </div>
        </div>
    )
}
