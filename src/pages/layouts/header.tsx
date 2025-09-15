import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-950 p-[17px]">
            <div className="m-auto w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] xxl:w-[1320px] flex justify-between items-center">
                <Link href="/" className="flex gap-2.5 items-center">
                    <div className="w-10 h-10">
                        <Image className="w-full h-full object-contain" src="/logo.png" alt="logo" width={200} height={200} />
                    </div>
                    <span className="text-white text-2xl font-sans">myWords</span>
                </Link>

                <Link href="/w" className="font-sans text-white">
                    Start
                </Link>
            </div>
        </header>
    )
}