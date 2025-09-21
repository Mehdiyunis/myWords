'use client'

import IdentifyPopup from "./identify-popup";
import { useGlobal } from "@/context/Context";

export default function Global() {
    const { openIdentify } = useGlobal()
    return (
        <>
            {openIdentify ? <IdentifyPopup /> : ""}
        </>
    )
}
