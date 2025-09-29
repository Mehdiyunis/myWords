'use client'

import { useSelector } from "react-redux";
import IdentifyPopup from "./identify-popup";
import { RootState } from "@/store/store";

export default function Global() {

    const { identifyPopUpStatus } = useSelector((state: RootState) => state.ideSt)

    return (
        <>
            {identifyPopUpStatus ? <IdentifyPopup /> : ""}
        </>
    )
}
