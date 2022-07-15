import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "~src/server/router";
import { createContext } from "~src/server/router/context";

export default createNextApiHandler({ router: appRouter, createContext });
