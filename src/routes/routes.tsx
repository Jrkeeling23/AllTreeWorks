import { createRootRouteWithContext, createRoute, Outlet } from "@tanstack/react-router";
import { StandardLayout } from "./StandardLayout";
import { Home } from "../pages/home";

import { InnerLayout } from "./InnerLayout";
import homepage from "../assets/images/homepage.jpg";
import servicesImg from "../assets/images/services.jpg";
import aboutUsImg from "../assets/images/aboutUs.jpg";
import contactImg from "../assets/images/contact.jpg";
import { Services } from "../pages/services";
import { AboutUs } from "../pages/aboutUs";
import { Contact } from "../pages/contact";

interface InnerLayoutContext {
    link: string;
    text: string;
}


export const rootRoute = createRootRouteWithContext<InnerLayoutContext>()({
    component: () => {
        return (
            <StandardLayout>
                <InnerLayout >
                    <Outlet />
                </InnerLayout>
            </StandardLayout>
        );
    },
});


export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    context: () => ({ link: homepage, text: "Reliable Tree Care That's Rooted in Excellence" }),
    component: () => (
        <Home />
    ),
});

export const aboutUsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/aboutUs",
    context: () => ({ link: aboutUsImg, text: "A Local Team You Can Rely On" }),
    component: () => (

        <AboutUs />

    ),
});

export const servicesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/services",
    context: () => ({ link: servicesImg, text: "Safe. Skilled. Specialized Tree Care Services" }),
    component: () => (
        <Services />
    ),
});

export const contactRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/contact",
    context: () => ({ link: contactImg, text: "Reach Out Today for Expert Tree Care" }),
    component: () => (


        <Contact />


    ),
});
