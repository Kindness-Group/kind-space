import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";


// app/Navigation.tsx
export function Navigation() {
    return (
        <Navbar className="border-black border-4 bg-white" fluid>

            <NavbarBrand as={Link} href="/">
                <img className="w-[10%] mr-3" src="/heart-icon.png" alt="icon" />
                <span className="text-xl font-semibold">Kind Space</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className="w-full flex flex-col md:flex-row md:justify-center md:items-center">
                <NavbarLink as={Link} href="" active>Kindness Feed</NavbarLink>
                <NavbarLink as={Link} href="">Kindness Map</NavbarLink>
                <NavbarLink as={Link} href="">Daily Suggestion</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}