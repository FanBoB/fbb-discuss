"use client";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, User } from "@nextui-org/react";
import { useTranslations } from "next-intl";
// import { getTranslations } from "next-intl/server";

export default function Home() {
	const t = useTranslations("Index");
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Dropdown>
				<DropdownTrigger>
					<Button variant="bordered">app</Button>
				</DropdownTrigger>
				<DropdownMenu aria-label="Static Actions">
					<DropdownItem key="new">CN</DropdownItem>
					<DropdownItem key="copy">JP</DropdownItem>
				</DropdownMenu>
			</Dropdown>

			<User
				name={t("title")}
				description="Product Designer"
				avatarProps={{
					src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
				}}
			/>
		</main>
	);
}
