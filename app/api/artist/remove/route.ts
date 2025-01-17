import { getSupabaseServerAdminClient } from "@/packages/supabase/src/clients/server-admin-client";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const artistId = req.nextUrl.searchParams.get("artistId");

  try {
    const client = getSupabaseServerAdminClient();
    await client.from("artists").delete().eq("id", artistId);
    await client.from("artist_social_links").delete().eq("artistId", artistId);
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : "failed";
    return Response.json({ message }, { status: 400 });
  }
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
