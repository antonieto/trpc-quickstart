import { createTRPCReact } from "@trpc/react";
import { BlogRouter } from "@server/src/api/v1";

export const blogsTrpc = createTRPCReact<BlogRouter>();