'use client'
import { useGlobal } from "@/context/Context"

export default function HeaderStartBtn() {
    const { openIdentify, setOpenIdentify } = useGlobal()
    return (
        <button
            onClick={() => setOpenIdentify(!openIdentify)}
            className="font-sans text-white block text-center bg-[#73d9ff] px-10 py-2 rounded-md">
            Start
        </button>
    )
}
