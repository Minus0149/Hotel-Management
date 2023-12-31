import { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "700", "900"],
	style: ["italic", "normal"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Hotel Management",
	description: "Great hotels and rooms with cheap deals.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={poppins.className}>
				<ThemeProvider>
					<Header />
					<main className="font-normal">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
