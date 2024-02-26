import Image from "next/image";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-20">
    <div>
    <p>Blog app</p>
    </div>
    <div>
    <Card/>
    </div>
    </div>
  )
}
