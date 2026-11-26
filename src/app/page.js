
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    number: "01",
    name: "Periféricos",
    description: "Todo para controlar y mejorar tu experiencia digital.",
    code: "INPUT / CONTROL",
    background: "bg-[#d9ebe5]",
    accent: "text-[#315b4c]",
    symbol: "⌘",
  },
  {
    number: "02",
    name: "Accesorios",
    description: "Pequeños detalles que hacen una gran diferencia.",
    code: "DESIGN / DAILY",
    background: "bg-[#f4e9dc]",
    accent: "text-[#936d4c]",
    symbol: "✳",
  },
  {
    number: "03",
    name: "Audio",
    description: "Encuentra nuevas formas de disfrutar tu música.",
    code: "SOUND / EXPERIENCE",
    background: "bg-[#e6e8dc]",
    accent: "text-[#66734d]",
    symbol: "♫",
  },
];

const products = [
  {
    number: "001",
    name: "Mouse",
    category: "PERIFÉRICOS",
    price: "$150",
    description: "Precisión y comodidad para tus actividades.",
  },
  {
    number: "002",
    name: "Teclado",
    category: "ESCRITURA",
    price: "$300",
    description: "Una experiencia diferente al escribir.",
  },
  {
    number: "003",
    name: "Audífonos",
    category: "AUDIO",
    price: "$450",
    description: "Disfruta de tu contenido favorito.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#171b19]">

      {/* HERO PRINCIPAL */}
      <section className="relative bg-[#d9ebe5]">

        <div className="mx-auto grid min-h-[680px] max-w-[1500px] items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-12 lg:px-20 lg:py-24">

          <div className="relative z-10 max-w-2xl">

            <span className="inline-block border border-[#315b4c] px-4 py-2 font-mono text-xs font-bold tracking-[0.2em]">
              TECNOLOGÍA · ACCESORIOS · ESTILO
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Tu espacio.
              <br />
              Tu ritmo.
              <br />
              <span className="text-[#477d6b]">Tu tecnología.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#4e6159] sm:text-lg">
              Descubre accesorios tecnológicos que combinan funcionalidad,
              diseño y personalidad. Encuentra todo lo que necesitas para
              transformar tu experiencia digital.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                href="/productos"
                className="bg-[#f4dc56] px-7 py-4 font-mono text-sm font-bold transition hover:bg-[#e8ce3f]"
              >
                DESCUBRIR PRODUCTOS ↗
              </Link>

              <Link
                href="/contacto"
                className="border border-[#234d42] px-7 py-4 font-mono text-sm font-bold transition hover:bg-[#234d42] hover:text-white"
              >
                CONTÁCTANOS
              </Link>

            </div>

            <div className="mt-16 flex gap-10 border-t border-[#9bb8ac] pt-6">

              <div>
                <p className="font-mono text-2xl font-bold">01</p>
                <p className="mt-1 text-xs text-[#526c61]">Explora</p>
              </div>

              <div>
                <p className="font-mono text-2xl font-bold">02</p>
                <p className="mt-1 text-xs text-[#526c61]">Descubre</p>
              </div>

              <div>
                <p className="font-mono text-2xl font-bold">03</p>
                <p className="mt-1 text-xs text-[#526c61]">Elige</p>
              </div>

            </div>
          </div>

          {/* FOTOGRAFÍAS: SOLO SE UTILIZAN AQUÍ */}
          <div className="relative mx-auto w-full max-w-xl py-8">

            <div className="absolute -right-4 top-0 h-full w-full border border-[#477d6b] sm:-right-7" />

            <div className="relative bg-[#edf4f0] p-5 sm:p-8">

              <div className="mb-6 flex items-center justify-between border-b border-[#c4d6cc] pb-4">
                <span className="font-mono text-xs font-bold tracking-widest">
                  YOUR DIGITAL SPACE
                </span>
                <span className="text-xs text-[#678376]">
                  COLLECTION / 001
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">

                <div className="relative aspect-square overflow-hidden bg-white">
                  <Image
                    src="/images.jpeg"
                    alt="Mouse de computadora"
                    fill
                    priority
                    sizes="(max-width: 768px) 45vw, 250px"
                    className="object-contain p-5"
                  />
                </div>

                <div className="relative row-span-2 min-h-[300px] overflow-hidden bg-white">
                  <Image
                    src="/images%20(2).jpeg"
                    alt="Audífonos"
                    fill
                    priority
                    sizes="(max-width: 768px) 45vw, 250px"
                    className="object-contain p-4"
                  />
                </div>

                <div className="relative aspect-square overflow-hidden bg-white">
                  <Image
                    src="/images%20(1).jpeg"
                    alt="Teclado"
                    fill
                    priority
                    sizes="(max-width: 768px) 45vw, 250px"
                    className="object-contain p-3"
                  />
                </div>

              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="font-mono text-xs tracking-widest">
                  ACCESSORIES FOR YOU
                </p>
                <span className="text-xl">↗</span>
              </div>

            </div>

            <div className="absolute -bottom-5 -left-5 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#f4dc56] text-center sm:-left-9">
              <span className="font-mono text-xl font-bold">AWP</span>
              <span className="text-[9px] tracking-widest">TECH STORE</span>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 lg:px-20">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#729184]">
              EXPLORA NUESTRA COLECCIÓN
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Encuentra tu categoría.
            </h2>
          </div>

          <Link
            href="/productos"
            className="w-fit border-b border-black pb-2 font-mono text-sm font-bold transition hover:text-[#477d6b]"
          >
            VER TODOS LOS PRODUCTOS ↗
          </Link>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          {categories.map((category) => (
            <Link
              href="/productos"
              key={category.number}
              className={`group relative min-h-[320px] overflow-hidden p-7 transition hover:-translate-y-1 ${category.background}`}
            >

              <div className="flex justify-between">
                <span className="font-mono text-xs tracking-widest">
                  {category.number} / {category.code}
                </span>
                <span className="text-xl transition group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <div className="relative flex h-44 items-center justify-center">

                <div className={`absolute h-36 w-36 rounded-full border ${category.accent} opacity-30 transition duration-500 group-hover:scale-125`} />

                <div className={`absolute h-28 w-28 rotate-45 border-2 ${category.accent} opacity-50`} />

                <span className={`relative font-mono text-7xl ${category.accent}`}>
                  {category.symbol}
                </span>

              </div>

              <h3 className="text-2xl font-bold">{category.name}</h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600">
                {category.description}
              </p>

            </Link>
          ))}

        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="bg-[#f2f3ef] py-24">

        <div className="mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#729184]">
                UNA SELECCIÓN PARA DESCUBRIR
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Productos destacados.
              </h2>

              <p className="mt-4 max-w-lg text-gray-600">
                Una pequeña selección de los accesorios disponibles en nuestra tienda.
              </p>
            </div>

            <Link
              href="/productos"
              className="w-fit bg-black px-6 py-4 font-mono text-xs font-bold text-white transition hover:bg-[#477d6b]"
            >
              EXPLORAR CATÁLOGO ↗
            </Link>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {products.map((product, index) => (
              <article
                key={product.number}
                className="group border border-[#d9ded8] bg-white p-7 transition hover:border-[#729184]"
              >

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-gray-500">
                    {product.category}
                  </span>
                  <span className="font-mono text-xs text-gray-400">
                    {product.number}
                  </span>
                </div>

                <div className="my-9 flex h-36 items-center justify-center overflow-hidden bg-[#f5f6f2]">

                  <span className={`font-mono text-7xl transition duration-500 group-hover:scale-125 ${index === 0 ? "text-[#729184]" : index === 1 ? "text-[#b58d75]" : "text-[#64735e]"}`}>
                    {index === 0 ? "⌖" : index === 1 ? "⌨" : "♫"}
                  </span>

                </div>

                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <span className="font-mono font-bold">{product.price}</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {product.description}
                </p>

                <Link
                  href="/productos"
                  className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4 font-mono text-xs font-bold transition hover:text-[#477d6b]"
                >
                  CONOCER PRODUCTO
                  <span className="text-lg">↗</span>
                </Link>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* BLOQUE EDITORIAL */}
      <section className="px-6 py-24 md:px-12 lg:px-20">

        <div className="mx-auto grid max-w-[1500px] overflow-hidden bg-[#203d34] md:grid-cols-2">

          <div className="flex flex-col justify-center p-9 text-white sm:p-14 lg:p-20">

            <p className="font-mono text-xs tracking-[0.2em] text-[#d5dca3]">
              MÁS QUE ACCESORIOS
            </p>

            <h2 className="mt-7 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Los detalles también hacen la diferencia.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-[#d1ddd6]">
              Tu espacio digital es una extensión de tu personalidad.
              Encuentra accesorios que acompañen tus ideas, tus proyectos
              y cada momento de tu día.
            </p>

            <Link
              href="/productos"
              className="mt-9 w-fit border border-[#e3df9e] px-7 py-4 font-mono text-xs font-bold text-[#e3df9e] transition hover:bg-[#e3df9e] hover:text-[#203d34]"
            >
              ENCUENTRA TU ESTILO ↗
            </Link>

          </div>

          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#d9ebe5] p-10">

            <div className="absolute h-72 w-72 rounded-full border border-[#477d6b]/40 sm:h-96 sm:w-96" />

            <div className="absolute h-56 w-56 rotate-45 border border-[#477d6b]/50 sm:h-72 sm:w-72" />

            <div className="absolute h-40 w-40 rounded-full bg-[#f4dc56] sm:h-52 sm:w-52" />

            <div className="relative z-10 text-center">
              <p className="font-mono text-5xl font-bold text-[#203d34] sm:text-7xl">
                AWP
              </p>
              <p className="mt-3 font-mono text-xs tracking-[0.3em] text-[#315b4c]">
                YOUR SPACE / YOUR RULES
              </p>
            </div>

            <span className="absolute right-8 top-8 font-mono text-xs text-[#315b4c]">
              DESIGN / 001
            </span>

            <span className="absolute bottom-8 left-8 font-mono text-xs text-[#315b4c]">
              TECHNOLOGY & ACCESSORIES
            </span>

          </div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="border-y border-gray-200 bg-[#fafbf8]">

        <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-16 md:grid-cols-3 md:px-12 lg:px-20">

          <div>
            <span className="font-mono text-3xl font-bold text-[#729184]">01.</span>
            <h3 className="mt-4 text-xl font-bold">Variedad</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Explora diferentes tipos de accesorios tecnológicos desde un mismo lugar.
            </p>
          </div>

          <div className="border-gray-200 md:border-l md:pl-10">
            <span className="font-mono text-3xl font-bold text-[#729184]">02.</span>
            <h3 className="mt-4 text-xl font-bold">Personalidad</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Encuentra opciones que se adapten a tus preferencias y a tu espacio.
            </p>
          </div>

          <div className="border-gray-200 md:border-l md:pl-10">
            <span className="font-mono text-3xl font-bold text-[#729184]">03.</span>
            <h3 className="mt-4 text-xl font-bold">Atención</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Si tienes alguna pregunta, puedes comunicarte con nosotros mediante nuestra sección de contacto.
            </p>
          </div>

        </div>
      </section>

      {/* CIERRE */}
      <section className="bg-[#f4dc56] px-6 py-20 md:px-12 lg:px-20">

        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>
            <p className="font-mono text-xs font-bold tracking-[0.2em]">
              EMPIEZA A EXPLORAR
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
              Dale una nueva perspectiva a tu espacio digital.
            </h2>
          </div>

          <Link
            href="/productos"
            className="flex min-h-14 shrink-0 items-center justify-center bg-black px-9 py-4 font-mono text-sm font-bold text-white transition hover:bg-[#203d34]"
          >
            VISITAR CATÁLOGO ↗
          </Link>

        </div>
      </section>

    </main>
  );
}
