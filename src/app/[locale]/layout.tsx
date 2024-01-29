import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "@/app/globals.css";

import NextUIProviderWrapper from "@/app/[locale]/provider";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
};

interface RootLayoutProps {
	children: React.ReactNode;
	params: { locale: string };
}

const RootLayout = ({ children, params: { locale } }: RootLayoutProps) => {
	const messages = useMessages();
	return (
		<html lang={locale}>
			<body>
				<NextUIProviderWrapper locale={locale}>
					<NextIntlClientProvider locale={locale} messages={messages}>
						{children}
					</NextIntlClientProvider>
				</NextUIProviderWrapper>
			</body>
		</html>
	);
};

export default RootLayout;
