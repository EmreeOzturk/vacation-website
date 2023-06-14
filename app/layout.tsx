import { Nunito } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import "../styles/globals.css";
import MountedClient from "@/components/providers/MountedClient";
import RegisterModal from "@/components/modals/RegisterModal";
import ReduxProvider from "@/components/providers/ReduxProvider";
import SignInModal from "@/components/modals/SignInModal";
const nunitoFont = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoFont.className}>
        <ReduxProvider>
          <MountedClient>
            <RegisterModal />
            <SignInModal />
            <Navbar />
            {children}
          </MountedClient>
        </ReduxProvider>
      </body>
    </html>
  );
}
