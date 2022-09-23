import { createTRPCReact } from "@trpc/react";
// import { BlogRouter } from "@server/src/api/v1";
import { AppRouter } from "@server/src/api";

export const appTrpc = createTRPCReact<AppRouter>();