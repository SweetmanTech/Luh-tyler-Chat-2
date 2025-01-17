import { z } from "zod";
import { tool } from "ai";
import upsertArtist from "../supabase/upsertArtist";
import { ArtistToolResponse } from "@/types/Tool";

const createArtist = (question: string, email: string) =>
  tool({
    description: `
    IMPORTANT: Always call this tool for ANY question related to creating artist:
    NOTE!!!: This feature will always run when prompted to create an artist, even if you don't get an artist name.
    Do NOT attempt to answer questions on these topics without calling this tool first!!!

    Example questions that MUST trigger this tool:
    - "Create a new artist."
    - "I wanna create a new artist."`,
    parameters: z.object({
      artist_name: z
        .string()
        .optional()
        .describe("The name of the artist to be created."),
    }),
    execute: async ({ artist_name }) => {
      if (!artist_name)
        return {
          context: {
            status: ArtistToolResponse.MISSING_ARTIST_NAME,
            answer: "Please provide the artist name to proceed.",
          },
          question,
        };
      const data = await upsertArtist(artist_name, email);
      return {
        context: {
          status: ArtistToolResponse.CREATED_ARTIST,
          data: data,
        },
        question,
      };
    },
  });

export default createArtist;
