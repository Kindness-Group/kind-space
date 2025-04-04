import {Dropdown, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle} from "flowbite-react";
import Link from "next/link";


// app/Navigation.tsx
export function Navigation() {
	return (
		<div className="relative p-1 bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400" >
			<Navbar className="border-black border-4 p-2.5 bg-white" fluid>

				<NavbarBrand as={Link} href="/">
					<img className="w-[10%] mr-3" src="/heart-icon.png" alt="icon" />
					<span className="text-xl font-semibold">Kind Space</span>
				</NavbarBrand>
				<NavbarToggle />

				<div className="max-md:hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 gap-8 list-none">
					<NavbarLink className="hover:text-purple-600 font-bold" as={Link} href="/kindness-feed" >Kindness Feed</NavbarLink>
					<NavbarLink className="hover:text-amber-400 font-bold" as={Link} href="/kindness-map">Kindness Map</NavbarLink>
					<NavbarLink className="hover:text-teal-400 font-bold" as={Link} href="/kindness-suggestions" >Daily Suggestion</NavbarLink>
				</div>

				<NavbarCollapse className="max-md:hidden">
					<Dropdown label="Account" inline={true} className="ml-auto">
						<DropdownItem>
							<NavbarLink as={Link} href="/sign-in">Login</NavbarLink>
						</DropdownItem>
						<DropdownItem>
							<NavbarLink as={Link} href="/sign-up">Sign-Up</NavbarLink>
						</DropdownItem>
						<DropdownItem>
							<NavbarLink as={Link} href="/viewprofile">Profile</NavbarLink>
						</DropdownItem>
						<DropdownItem>
							<NavbarLink as={Link} href="/edit-profile">Edit Profile</NavbarLink>
						</DropdownItem>
						<DropdownItem>
							<NavbarLink as={Link} href="/sign-out">Sign-Out</NavbarLink>
						</DropdownItem>
					</Dropdown>
				</NavbarCollapse>

				<NavbarCollapse className="md:hidden">
					<NavbarLink as={Link} href="/kindness-feed" active>Kindness Feed</NavbarLink>
					<NavbarLink as={Link} href="/kindness-map">Kindness Map</NavbarLink>
					<NavbarLink as={Link} href="/kindness-suggestions">Daily Suggestion</NavbarLink>
					<NavbarLink as={Link} href="/sign-in">Login</NavbarLink>
					<NavbarLink as={Link} href="/sign-up">Sign-Up</NavbarLink>
					<NavbarLink as={Link} href="/viewprofile">Profile</NavbarLink>
					<NavbarLink as={Link} href="/edit-profile">Edit Profile</NavbarLink>
				</NavbarCollapse>

			</Navbar>
		</div>
	);
}