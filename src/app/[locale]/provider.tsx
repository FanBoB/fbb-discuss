"use client";

import { NextUIProvider } from "@nextui-org/react";
interface Props {
	children: React.ReactNode;
	locale: string;
}
export default function NextUIProviderWrapper({ children, locale }: Props) {
	return <NextUIProvider locale={locale}>{children}</NextUIProvider>;
}
