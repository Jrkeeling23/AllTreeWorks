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

export const menuRoutes = [
    { text: "Home", path: indexRoute },
    { text: "Services", path: servicesRoute },
    { text: "About Us", path: aboutUsRoute },
    { text: "Contact Us", path: contactRoute },
  ];

export const router = createRouter({ routeTree, context: { link: '', text: '' } });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
