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
                {/*<NavbarLink as={Link} href="/frontend/public" active>*/}
                {/*    Home*/}
                {/*</NavbarLink>*/}
                {/*<NavbarLink as={Link} href="/about">*/}
                {/*    About*/}
                {/*</NavbarLink>*/}
            </NavbarCollapse>
        </Navbar>
    );
}