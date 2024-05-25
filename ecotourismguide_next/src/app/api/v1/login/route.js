import prisma from "@/libs/prisma"

export async function POST(request) {
    try {
        const { nama_pelaku, password } = await request.json();
        const user = await prisma.Pelaku_wisata.findUnique({
            where: {
                nama_pelaku: nama_pelaku
            },
        });
        if (user && user.password === password) {
            return new Response(JSON.stringify({ status: 200, isAuthenticated: true }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ status: 401, isAuthenticated: false }), { status: 401 });
        }
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, error: error.message }), { status: 500 });
    }
}

export default async (req, res) => {
    if (req.method === 'POST') {
        return POST(req, res);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};