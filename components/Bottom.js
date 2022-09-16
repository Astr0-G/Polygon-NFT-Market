import { ConnectButton } from "web3uikit"
import Link from "next/link"
export default function Header() {
    return (
        <a1>
            <Link href="/">
                <button className="text-2xl rounded-tr-full text-white font-bold bg-gradient-to-r from-cyan-400 to-blue-400 border-indigo-500/100 absolute bottom-0 left-0 mr-0 p-16">
                    BUY
                </button>
            </Link>
            <Link href="/sell-nft">
                <a className="text-2xl rounded-tl-full text-white font-bold bg-gradient-to-r from-blue-400 to-cyan-400 border-indigo-500/100 absolute bottom-0 right-0 mr-0 p-16">
                    SELL
                </a>
            </Link>
        </a1>
    )
}
