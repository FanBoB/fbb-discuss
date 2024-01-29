"use client";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, User } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Key, useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";
// import { getTranslations } from "next-intl/server";

export default function Home() {
	const t = useTranslations("Index");
	const router = useRouter();
	const pathname = usePathname();

	// eslint-disable-next-line no-unused-vars
	const [isPending, startTransition] = useTransition();

	const hadnleDropAction = (key: Key) => {
		startTransition(() => {
			router.replace(pathname, { locale: key.toString() });
		});
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Dropdown>
				<DropdownTrigger>
					<Button variant="bordered">app</Button>
				</DropdownTrigger>
				<DropdownMenu aria-label="Static Actions" onAction={hadnleDropAction}>
					<DropdownItem key="en">EN</DropdownItem>
					<DropdownItem key="ja">JP</DropdownItem>
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
