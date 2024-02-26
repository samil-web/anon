import Image from "next/image"

export default function Card() {
  return (
    <div>
    <Image src="/images/logo.svg" alt="Vercel Logo" width={72} height={16} />
    <h3>Blog1</h3>
    <p>description</p>
    </div>
  )
}
