'use client'
import { useState } from "react"
import { useGlobal } from "@/context/Context";

export default function IdentifyPopup() {
    const [changeIdentify, setChangeIdentify] = useState(true);
    const { openIdentify, setOpenIdentify } = useGlobal()

    const closeIdentify = (e: any) => {
        e.stopPropagation()
        setOpenIdentify(!openIdentify)
        console.log("Wilma")
    }

    return (
        // blur
        <div onClick={(e) => closeIdentify(e)} className="fixed top-0 left-0 z-10 w-[100vw] h-[100vh] backdrop-blur-2xl" >

            {/* full screen realative */}
            <div className="relative w-[100vw] h-[100vh]">

                {/* pop up conatiner */}
                <div onClick={e => e.stopPropagation()} className="absolute top-1/2 left-1/2 -translate-1/2 w-1/2 bg-[var(--headBg)] px-16 py-10 rounded-2xl  shadow-[0_0_30px_3px_var(--logoColor)] transition-all">

                    {/* Identify ways */}
                    <div className={`mb-2 relative ${changeIdentify ? "h-[292px]" : "h-[168]"} transition-all duration-500 overflow-hidden`}>

                        <div className={`transition-all duration-500 flex flex-col gap-8 absolute w-full top-0 ${changeIdentify ? "left-0" : "-left-full"}  px-2`}>
                            <h2 className="text-white text-2xl text-center mb-3">Register</h2>

                            <input className="input" placeholder="Fred Flintstone" type="text" name="username" id="username" />

                            <input className="input"
                                placeholder="fredflintstone@mywords.com" type="email" name="email" id="email" />

                            <input className="input" placeholder="ilovemywife88" type="password" name="password" id="password" />

                            <input className="input" placeholder="ilovemywife88" type="password" name="again" id="again" />

                        </div>

                        <div className={`transition-all duration-500 flex flex-col gap-8 absolute w-full top-0 ${changeIdentify ? "left-full" : "left-0"}  px-2`}>
                            <h2 className="text-white text-2xl text-center mb-3">Sign In</h2>

                            <input className="input" placeholder="Fred Flintstone" type="text" name="name" id="name" />

                            <input className="input" placeholder="ilovemywife88" type="password" name="password" id="passwordSign" />

                        </div>
                    </div>

                    {/* user chooses does he have an account or not */}
                    {!changeIdentify ?
                        <p className="mb-8 pl-2">I don't have an account. <button onClick={() => setChangeIdentify(!changeIdentify)} className="cursor-pointer text-[var(--logoColor)]">Create</button></p>
                        :
                        <p className="mb-8 pl-2">I have an account. <button onClick={() => setChangeIdentify(!changeIdentify)} className="cursor-pointer text-[var(--logoColor)]">Sing in</button></p>}

                    {/* enter btn */}
                    <button onClick={() => console.log("Fred")} className="relative block m-auto text-center bg-[#73d9ff] py-2 px-16 rounded-md cursor-pointer">
                        Continue

                        {/* popup close button */}
                        <div onClick={(e) => closeIdentify(e)} className="absolute w-[45px] h-[45px] text-[45px] leading-[34px] rounded-full bg-white text-[var(--headBg)] top-[100px] left-1/2 -translate-x-1/2 rotate-45 z-20">
                            +
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
