import { messages } from "@/server/db";

export async function GET() {
  return new Response(JSON.stringify(messages));
}
