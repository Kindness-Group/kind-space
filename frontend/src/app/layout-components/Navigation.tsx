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
            <NavbarCollapse>
                <NavbarLink as={Link} href="/kindness-feed" active>Kindness Feed</NavbarLink>
                <NavbarLink as={Link} href="/kindness-map">Kindness Map</NavbarLink>
                <NavbarLink as={Link} href="/kindness-suggestions">Daily Suggestion</NavbarLink>
                <NavbarLink as={Link} href="/login">Login</NavbarLink>
                <NavbarLink as={Link} href="/signup">Sign-Up</NavbarLink>
                <NavbarLink as={Link} href="/viewprofile">Profile</NavbarLink>
                <NavbarLink as={Link} href="/edit-profile">Edit Profile</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}