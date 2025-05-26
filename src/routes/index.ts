import { createRouter } from "@tanstack/react-router";
import {
  aboutUsRoute,
  contactRoute,
  indexRoute,

  rootRoute,
  servicesRoute,
} from "./routes";

const routeTree = rootRoute.addChildren(
  [
    indexRoute,
    servicesRoute,
    aboutUsRoute,
    contactRoute,
  ]
);

export const router = createRouter({ routeTree, context: { link: '', text: '' } });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
