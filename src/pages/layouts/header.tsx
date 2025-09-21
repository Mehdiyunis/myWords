import HeaderStartBtn from "@/components/headerStartBtn";
import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return (
        <header className="bg-[#000d6c] p-[17px]">
            <div className="m-auto custom-container flex justify-between items-center">
                <Link href="/" className="flex gap-2.5 items-center">
                    <div className="w-10 h-10">
                        <Image className="w-full h-full object-contain" src="/logo.png" alt="logo" width={200} height={200} />
                    </div>
                    <span className="text-white text-2xl font-sans">myWords</span>
                </Link>

                {/* start button */}
                <HeaderStartBtn />
            </div>
        </header>
    )
}