import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import UserContextProvider from "./Context/UserProvider";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<UserContextProvider>
					<Header />
					<main className="flex-1">{children}</main>
					{/* <Footer /> */}
				</UserContextProvider>
			</body>
		</html>
	);
}
