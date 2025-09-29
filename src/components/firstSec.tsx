'use client'
import { identifyChangeStatus } from "@/store/reducers/identifyPopUpSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function FirstSec() {

  const dispatch = useDispatch()

  const openIdentifyPopUp = () => {
    dispatch(identifyChangeStatus())
  }

  return (
    <section className="h-[100vh] bg-[#00073a]">
      <div className="flex justify-between gap-5 items-center custom-container py-14">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-9 lg:text-6xl lg:mb-12">Repetition is The Mother of Knowledge.</h1>
          <p className="text-xl text-gray-200 mb-9 lg:text-2xl lg:mb-12">Effortlessly create & study flashcards. Our free, science-backed spaced repetition system helps you learn faster and forget less. Syncs across web, iOS & Android, even offline.</p>
          <button onClick={openIdentifyPopUp} className="block w-full text-center bg-[#73d9ff] p-3 rounded-md">Start Learning</button>
        </div>

        <div className="w-1/3">
          <Image className="object-cover rounded-4xl" alt="bigImage" width={1000} height={1000} src="/purple-fox.png" />
        </div>
      </div>
    </section>
  )
}