
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mi Primera App | Tech Store",
  description: "Tienda de accesorios y tecnología.",
};

export default async function RootLayout({ children }) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const nombreUsuario =
    user?.user_metadata?.full_name ||
    user?.email ||
    "Usuario";

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">

        <header className="relative z-20 border-b border-[#c5d8cf] bg-[#ffffff]">

          <div className="mx-auto flex min-h-[88px] max-w-[1500px] flex-col justify-between gap-5 px-6 py-5 sm:flex-row sm:items-center md:px-12 lg:px-20">

            {/* IDENTIDAD */}
            <Link href="/" className="group flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center bg-[#203d34] text-[#f4dc56] transition group-hover:bg-[#315b4c]">
                <span className="font-mono text-xl font-bold">A.</span>
              </div>

              <div>
                <p className="font-mono text-lg font-bold tracking-tight">
                  TECHNOLOGY & ACCESSORIES
                </p>

                <p className="mt-0.5 text-[9px] font-bold tracking-[0.25em] text-[#577367]">
                  Tienda para articulos tecnologicos
                </p>
              </div>

            </Link>

            {/* NAVEGACIÓN */}
            <nav className="flex flex-wrap items-center gap-2 sm:gap-3">

              <Link
                href="/"
                className="px-4 py-3 font-mono text-xs font-bold tracking-wider transition hover:bg-[#edf2ed]"
              >
                INICIO
              </Link>

              <Link
                href="/productos"
                className="px-4 py-3 font-mono text-xs font-bold tracking-wider transition hover:bg-[#edf2ed]"
              >
                PRODUCTOS
              </Link>

              <Link
                href="/contacto"
                className="px-4 py-3 font-mono text-xs font-bold tracking-wider transition hover:bg-[#edf2ed]"
              >
                CONTACTO
              </Link>

              {user ? (
                <>
                  <span className="px-4 py-3 font-mono text-xs font-bold tracking-wider text-[#294438]">
                    HOLA, {nombreUsuario.toUpperCase()}
                  </span>

                  <form action="/auth/signout" method="POST">
                    <button
                      type="submit"
                      className="bg-[#203d34] px-5 py-3 font-mono text-xs font-bold tracking-wider text-white transition hover:bg-[#315b4c]"
                    >
                      CERRAR SESIÓN ↗
                    </button>
                  </form>
                </>
              ) : (
                <Link
                  href="/cuenta"
                  className="bg-[#f4dc56] px-5 py-3 font-mono text-xs font-bold tracking-wider text-[#203d34] transition hover:bg-[#e8ce3f]"
                >
                  MI CUENTA ↗
                </Link>
              )}

            </nav>

          </div>

        </header>

        {children}

      </body>
    </html>
  );
}
