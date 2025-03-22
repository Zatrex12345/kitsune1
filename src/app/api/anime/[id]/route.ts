import { hianime } from "@/lib/hianime";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    const data = await hianime.getInfo(id);
    return Response.json({ data });
  } catch (err) {
    console.log(err);
    return Response.json({ error: "something went wrong" }, { status: 500 });
  }
}
