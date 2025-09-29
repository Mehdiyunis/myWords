'use client'

import { identifyChangeStatus } from "@/store/reducers/identifyPopUpSlice"
import { useDispatch } from "react-redux"

export default function HeaderStartBtn() {
    const dispatch = useDispatch()

    return (
        <button
            onClick={() => dispatch(identifyChangeStatus())}
            className="font-sans text-white block text-center bg-[#73d9ff] px-10 py-2 rounded-md">
            Start
        </button>
    )
}
