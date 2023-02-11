import Navbar from "@/components/Navbar";
import Sharebar from "@/components/Sharebar";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <header className="flex flex-row justify-between px-12 py-4">
          <h1>MyApp</h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Dashboard</a>
              </li>
            </ul>
          </nav>
        </header> */}

        <main className="bg min-h-screen bg-gradient-to-t from-white to-zinc-200">
          <Navbar></Navbar>
          <div className="mt-10 p-2 md:flex md:justify-center">
            <div className="">
              <Sharebar></Sharebar>
            </div>
            <div className="max-w-8xl bg-white md:basis-[60rem]">
              {children}
            </div>
            <div className="flex basis-[28rem] justify-center md:flex md:px-4 ">
              <Sidebar></Sidebar>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
