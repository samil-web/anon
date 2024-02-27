import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'
export async function GET() {
  const res = await fetch('http://localhost:4000/tickets')
  const data = await res.json()
  return NextResponse.json(data,{
    status:200
  })
}

export async function POST(req){
   const res = await fetch('http://localhost:4000/tickets',{
       method:'POST',
       headers:{
           'Content-Type':'application/json',
       },
        body:JSON.stringify(await req.json())
   })
   return NextResponse.json(await res.json(),{
       status:201
   })
}