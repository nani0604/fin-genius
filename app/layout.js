import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinGenius - Your Personal Finance Assistant",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} FinGenius. All rights
                reserved.
              </p>
              <p className="text-xs mt-2">
                Built with ❤️ by{" "}
                <a
                  href="https://www.linkedin.com/in/narendrayathapu
                  className="text-blue-600 hover:underline"
                >
                  Narendra Kumar Reddy Yathapu
                </a>
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
