import prisma from "@/libs/prisma"

export async function POST(request) {
    const { nama_pelaku, password } = await request.json()
    const data = { nama_pelaku, password }

    const Login = await prisma.Pelaku_wisata.create({ data })
    
    if (!Login) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
}