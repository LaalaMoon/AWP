
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const CATEGORIAS = [
  {
    id: "mouse-teclados",
    nombre: "Mouse y teclados",
    descripcion: "Encuentra los periféricos ideales para tu escritorio.",
    codigo: "INPUT / CONTROL",
    simbolo: "⌨",
    color: "bg-[#d9ebe5]",
    texto: "text-[#315b4c]",
  },
  {
    id: "audio",
    nombre: "Audífonos y bocinas",
    descripcion: "Sonido para acompañar cada momento.",
    codigo: "SOUND / MUSIC",
    simbolo: "♫",
    color: "bg-[#eee4dc]",
    texto: "text-[#936d4c]",
  },
  {
    id: "microfonos-camaras",
    nombre: "Micrófonos y cámaras web",
    descripcion: "Herramientas para comunicarte y crear contenido.",
    codigo: "STREAM / CREATE",
    simbolo: "◉",
    color: "bg-[#e5e8dc]",
    texto: "text-[#66734d]",
  },
  {
    id: "monitores",
    nombre: "Monitores",
    descripcion: "Amplía tu espacio de trabajo y entretenimiento.",
    codigo: "DISPLAY / VISUAL",
    simbolo: "▣",
    color: "bg-[#e2e8ed]",
    texto: "text-[#526b82]",
  },
  {
    id: "accesorios-pc",
    nombre: "Accesorios para PC",
    descripcion: "Complementos para personalizar tu computadora.",
    codigo: "PC / ACCESSORIES",
    simbolo: "✳",
    color: "bg-[#f1e7d5]",
    texto: "text-[#99794d]",
  },
  {
    id: "almacenamiento",
    nombre: "Almacenamiento USB y discos",
    descripcion: "Soluciones para guardar tus archivos.",
    codigo: "STORAGE / DATA",
    simbolo: "▤",
    color: "bg-[#e5e1ed]",
    texto: "text-[#76628e]",
  },
  {
    id: "cables",
    nombre: "Cables, cargadores y adaptadores",
    descripcion: "Conexiones y energía para tus dispositivos.",
    codigo: "POWER / CONNECT",
    simbolo: "⌁",
    color: "bg-[#f1e5e4]",
    texto: "text-[#a46b68]",
  },
  {
    id: "gaming",
    nombre: "Controles y periféricos gaming",
    descripcion: "Accesorios para mejorar tu experiencia de juego.",
    codigo: "GAMING / PLAY",
    simbolo: "✣",
    color: "bg-[#e1e8e3]",
    texto: "text-[#477d6b]",
  },
  {
    id: "soportes-escritorios",
    nombre: "Soportes y escritorios",
    descripcion: "Organiza y transforma tu espacio de trabajo.",
    codigo: "DESK / SETUP",
    simbolo: "▥",
    color: "bg-[#eee9dc]",
    texto: "text-[#89784e]",
  },
];

const PRODUCTOS = [
  // MOUSE Y TECLADOS
  {
    id: 1,
    nombre: "Mouse",
    precio: 150,
    categoria: "mouse-teclados",
    etiqueta: "PERIFÉRICOS",
    imagen: "/images.jpeg",
    descripcion: "Mouse para computadora.",
  },
  {
    id: 2,
    nombre: "Teclado",
    precio: 300,
    categoria: "mouse-teclados",
    etiqueta: "PERIFÉRICOS",
    imagen: "/images%20(1).jpeg",
    descripcion: "Teclado para computadora.",
  },
  {
    id: 3,
    nombre: "Mouse inalámbrico",
    precio: 249,
    categoria: "mouse-teclados",
    etiqueta: "INALÁMBRICO",
    imagen: "/Mouse.jpeg",
    descripcion: "Mouse inalámbrico con receptor USB.",
  },
  {
    id: 4,
    nombre: "Teclado mecánico RGB",
    precio: 899,
    categoria: "mouse-teclados",
    etiqueta: "MECÁNICO",
    imagen: "/RGB.jpeg",
    descripcion: "Teclado mecánico con iluminación RGB.",
  },
  {
    id: 5,
    nombre: "Combo teclado y mouse",
    precio: 499,
    categoria: "mouse-teclados",
    etiqueta: "COMBO",
    imagen: "/teclado.jpeg",
    descripcion: "Conjunto de teclado y mouse inalámbricos.",
  },

  // AUDÍFONOS Y BOCINAS
  {
    id: 6,
    nombre: "Audífonos",
    precio: 450,
    categoria: "audio",
    etiqueta: "AUDIO",
    imagen: "/images%20(2).jpeg",
    descripcion: "Audífonos para disfrutar de tu música.",
  },
  {
    id: 7,
    nombre: "Audífonos Bluetooth",
    precio: 599,
    categoria: "audio",
    etiqueta: "INALÁMBRICO",
    imagen: "/Blue.jpeg",
    descripcion: "Audífonos inalámbricos con conexión Bluetooth.",
  },
  {
    id: 8,
    nombre: "Audífonos gamer",
    precio: 799,
    categoria: "audio",
    etiqueta: "GAMING",
    imagen: "/gamer.jpeg",
    descripcion: "Audífonos con micrófono integrado.",
  },
  {
    id: 9,
    nombre: "Bocina portátil",
    precio: 499,
    categoria: "audio",
    etiqueta: "PORTÁTIL",
    imagen: "/bocina.jpeg",
    descripcion: "Bocina compacta para escuchar música.",
  },
  {
    id: 10,
    nombre: "Bocinas para escritorio",
    precio: 699,
    categoria: "audio",
    etiqueta: "ESCRITORIO",
    imagen: "/escritorio.jpeg",
    descripcion: "Par de bocinas para computadora.",
  },

  // MICRÓFONOS Y CÁMARAS WEB
  {
    id: 11,
    nombre: "Micrófono USB",
    precio: 599,
    categoria: "microfonos-camaras",
    etiqueta: "USB",
    imagen: "/micro.jpeg",
    descripcion: "Micrófono USB para grabaciones y videollamadas.",
  },
  {
    id: 12,
    nombre: "Micrófono de condensador",
    precio: 1099,
    categoria: "microfonos-camaras",
    etiqueta: "ESTUDIO",
    imagen: "/microf.jpeg",
    descripcion: "Micrófono para grabación de voz y contenido.",
  },
  {
    id: 13,
    nombre: "Micrófono de solapa",
    precio: 299,
    categoria: "microfonos-camaras",
    etiqueta: "PORTÁTIL",
    imagen: "/solapa.jpeg",
    descripcion: "Micrófono compacto para grabaciones.",
  },
  {
    id: 14,
    nombre: "Cámara web HD",
    precio: 399,
    categoria: "microfonos-camaras",
    etiqueta: "HD",
    imagen: "/camera.jpeg",
    descripcion: "Cámara web para videollamadas.",
  },
  {
    id: 15,
    nombre: "Cámara web Full HD",
    precio: 799,
    categoria: "microfonos-camaras",
    etiqueta: "FULL HD",
    imagen: "/camara.jpeg",
    descripcion: "Cámara web con resolución Full HD.",
  },

  // MONITORES
  {
    id: 16,
    nombre: "Monitor 22 pulgadas",
    precio: 2199,
    categoria: "monitores",
    etiqueta: "FULL HD",
    imagen: "/monitor.jpeg",
    descripcion: "Monitor compacto para trabajo y estudio.",
  },
  {
    id: 17,
    nombre: "Monitor 24 pulgadas",
    precio: 2899,
    categoria: "monitores",
    etiqueta: "FULL HD",
    imagen: "/moni.jpeg",
    descripcion: "Monitor de 24 pulgadas para uso diario.",
  },
  {
    id: 18,
    nombre: "Monitor gaming 27 pulgadas",
    precio: 4499,
    categoria: "monitores",
    etiqueta: "GAMING",
    imagen: "/mon.jpeg",
    descripcion: "Monitor gaming de 27 pulgadas.",
  },
  {
    id: 19,
    nombre: "Monitor QHD",
    precio: 5299,
    categoria: "monitores",
    etiqueta: "QHD",
    imagen: "/QHD.jpeg",
    descripcion: "Monitor de alta resolución para productividad.",
  },
  {
    id: 20,
    nombre: "Monitor portátil",
    precio: 3299,
    categoria: "monitores",
    etiqueta: "PORTÁTIL",
    imagen: "/portatil.jpeg",
    descripcion: "Pantalla portátil para ampliar tu espacio de trabajo.",
  },

  // ACCESORIOS PARA PC
  {
    id: 21,
    nombre: "Hub USB de 4 puertos",
    precio: 199,
    categoria: "accesorios-pc",
    etiqueta: "CONECTIVIDAD",
    imagen: "/Hub.jpeg",
    descripcion: "Amplía las conexiones USB de tu computadora.",
  },
  {
    id: 22,
    nombre: "Base de enfriamiento para laptop",
    precio: 399,
    categoria: "accesorios-pc",
    etiqueta: "REFRIGERACIÓN",
    imagen: "/Base.jpeg",
    descripcion: "Base con ventiladores para laptops.",
  },
  {
    id: 23,
    nombre: "Lector de tarjetas USB",
    precio: 149,
    categoria: "accesorios-pc",
    etiqueta: "LECTOR",
    imagen: "/USB.jpeg",
    descripcion: "Lector de tarjetas SD y microSD.",
  },
  {
    id: 24,
    nombre: "Adaptador Bluetooth USB",
    precio: 179,
    categoria: "accesorios-pc",
    etiqueta: "BLUETOOTH",
    imagen: "/Mini.jpeg",
    descripcion: "Añade conectividad Bluetooth a tu PC.",
  },
  {
    id: 25,
    nombre: "Tarjeta de sonido USB",
    precio: 229,
    categoria: "accesorios-pc",
    etiqueta: "AUDIO PC",
    imagen: "/tar.jpeg",
    descripcion: "Adaptador de audio externo USB.",
  },

  // ALMACENAMIENTO
  {
    id: 26,
    nombre: "Memoria USB 32 GB",
    precio: 99,
    categoria: "almacenamiento",
    etiqueta: "USB",
    imagen: "/32.jpeg",
    descripcion: "Memoria portátil de 32 GB.",
  },
  {
    id: 27,
    nombre: "Memoria USB 64 GB",
    precio: 149,
    categoria: "almacenamiento",
    etiqueta: "USB",
    imagen: "/64.jpeg",
    descripcion: "Memoria portátil de 64 GB.",
  },
  {
    id: 28,
    nombre: "Memoria USB 128 GB",
    precio: 229,
    categoria: "almacenamiento",
    etiqueta: "USB",
    imagen: "/128.jpeg",
    descripcion: "Memoria portátil de 128 GB.",
  },
  {
    id: 29,
    nombre: "SSD externo 500 GB",
    precio: 1099,
    categoria: "almacenamiento",
    etiqueta: "SSD",
    imagen: "/500.jpeg",
    descripcion: "Unidad de estado sólido externa de 500 GB.",
  },
  {
    id: 30,
    nombre: "Disco duro externo 1 TB",
    precio: 1399,
    categoria: "almacenamiento",
    etiqueta: "HDD",
    imagen: "/1T.jpeg",
    descripcion: "Almacenamiento externo de 1 TB.",
  },

  // CABLES, CARGADORES Y ADAPTADORES
  {
    id: 31,
    nombre: "Cable HDMI 2 metros",
    precio: 129,
    categoria: "cables",
    etiqueta: "HDMI",
    imagen: "/2m.jpeg",
    descripcion: "Cable HDMI para conectar pantallas.",
  },
  {
    id: 32,
    nombre: "Cable USB-C",
    precio: 99,
    categoria: "cables",
    etiqueta: "USB-C",
    imagen: "/CableC.jpeg",
    descripcion: "Cable USB-C para carga y transferencia.",
  },
  {
    id: 33,
    nombre: "Cargador USB-C 30W",
    precio: 349,
    categoria: "cables",
    etiqueta: "CARGADOR",
    imagen: "/30W.jpeg",
    descripcion: "Adaptador de corriente USB-C de 30W.",
  },
  {
    id: 34,
    nombre: "Adaptador USB-C a HDMI",
    precio: 299,
    categoria: "cables",
    etiqueta: "ADAPTADOR",
    imagen: "/HDMI.jpeg",
    descripcion: "Adaptador para conectar una pantalla HDMI.",
  },
  {
    id: 35,
    nombre: "Cable DisplayPort",
    precio: 199,
    categoria: "cables",
    etiqueta: "DISPLAYPORT",
    imagen: "/Cable.jpeg",
    descripcion: "Cable DisplayPort para monitores compatibles.",
  },

  // GAMING
  {
    id: 36,
    nombre: "Control inalámbrico",
    precio: 699,
    categoria: "gaming",
    etiqueta: "GAMING",
    imagen: "/Contol.jpeg",
    descripcion: "Control inalámbrico para videojuegos.",
  },
  {
    id: 37,
    nombre: "Mouse gamer RGB",
    precio: 499,
    categoria: "gaming",
    etiqueta: "GAMING",
    imagen: "/mouseR.jpeg",
    descripcion: "Mouse gamer con iluminación RGB.",
  },
  {
    id: 38,
    nombre: "Teclado gamer RGB",
    precio: 899,
    categoria: "gaming",
    etiqueta: "GAMING",
    imagen: "/TRGB.jpeg",
    descripcion: "Teclado para videojuegos con iluminación.",
  },
  {
    id: 39,
    nombre: "Mousepad XL",
    precio: 249,
    categoria: "gaming",
    etiqueta: "GAMING",
    imagen: "/XL.jpeg",
    descripcion: "Superficie amplia para mouse y teclado.",
  },
  {
    id: 40,
    nombre: "Joystick USB",
    precio: 549,
    categoria: "gaming",
    etiqueta: "CONTROL",
    imagen: "/Joy.jpeg",
    descripcion: "Joystick para juegos compatibles con PC.",
  },

  // SOPORTES Y ESCRITORIOS
  {
    id: 41,
    nombre: "Soporte para laptop",
    precio: 349,
    categoria: "soportes-escritorios",
    etiqueta: "ERGONOMÍA",
    imagen: "/soporte.jpeg",
    descripcion: "Soporte para elevar tu computadora portátil.",
  },
  {
    id: 42,
    nombre: "Soporte para monitor",
    precio: 499,
    categoria: "soportes-escritorios",
    etiqueta: "ESCRITORIO",
    imagen: "/soporteM.jpeg",
    descripcion: "Base para elevar y organizar tu monitor.",
  },
  {
    id: 43,
    nombre: "Soporte para audífonos",
    precio: 199,
    categoria: "soportes-escritorios",
    etiqueta: "ORGANIZACIÓN",
    imagen: "/soporteA.jpeg",
    descripcion: "Organizador de escritorio para audífonos.",
  },
  {
    id: 44,
    nombre: "Brazo articulado para monitor",
    precio: 899,
    categoria: "soportes-escritorios",
    etiqueta: "ERGONOMÍA",
    imagen: "/Brazo.jpeg",
    descripcion: "Brazo ajustable para colocar tu monitor.",
  },
  {
    id: 45,
    nombre: "Organizador de cables",
    precio: 129,
    categoria: "soportes-escritorios",
    etiqueta: "ORGANIZACIÓN",
    imagen: "/Organizador1.jpeg",
    descripcion: "Accesorio para mantener ordenados los cables.",
  },
];

export default function ProductosPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("todos");
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("predeterminado");
  const [productosAgregados, setProductosAgregados] = useState([]);

  const productosFiltrados = useMemo(() => {
    let resultado = PRODUCTOS.filter((producto) => {
      const coincideCategoria =
        categoriaActiva === "todos" ||
        producto.categoria === categoriaActiva;

      const textoBusqueda = busqueda.toLowerCase();

      const coincideBusqueda =
        producto.nombre.toLowerCase().includes(textoBusqueda) ||
        producto.descripcion.toLowerCase().includes(textoBusqueda) ||
        producto.etiqueta.toLowerCase().includes(textoBusqueda);

      return coincideCategoria && coincideBusqueda;
    });

    if (orden === "menor") {
      resultado.sort((a, b) => a.precio - b.precio);
    }

    if (orden === "mayor") {
      resultado.sort((a, b) => b.precio - a.precio);
    }

    if (orden === "nombre") {
      resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    return resultado;
  }, [categoriaActiva, busqueda, orden]);

  const agregarProducto = (id) => {
    setProductosAgregados((actuales) =>
      actuales.includes(id)
        ? actuales.filter((productoId) => productoId !== id)
        : [...actuales, id]
    );
  };

  const totalSeleccionado = PRODUCTOS
    .filter((producto) => productosAgregados.includes(producto.id))
    .reduce((total, producto) => total + producto.precio, 0);

  const categoriaSeleccionada = CATEGORIAS.find(
    (categoria) => categoria.id === categoriaActiva
  );

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#171b19]">

      {/* PORTADA */}
      <section className="bg-[#d9ebe5]">
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-6 py-20 md:grid-cols-2 md:px-12 lg:px-20">

          <div>
            <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#477d6b]">
              AWP / PRODUCT COLLECTION
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Explora.
              <br />
              Encuentra.
              <br />
              <span className="text-[#477d6b]">Elige lo tuyo.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#526c61]">
              Descubre nuestra selección de accesorios tecnológicos.
              Desde periféricos hasta complementos para transformar
              tu espacio digital.
            </p>

            <a
              href="#categorias"
              className="mt-8 inline-flex bg-[#f4dc56] px-7 py-4 font-mono text-sm font-bold transition hover:bg-[#e8ce3f]"
            >
              EXPLORAR CATEGORÍAS ↘
            </a>
          </div>

          <div className="relative flex min-h-[320px] items-center justify-center md:min-h-[420px]">
            <div className="absolute h-64 w-64 rounded-full border border-[#477d6b]/40 sm:h-80 sm:w-80" />
            <div className="absolute h-48 w-48 rotate-45 border border-[#477d6b]/50 sm:h-60 sm:w-60" />

            <div className="relative z-10 text-center">
              <p className="font-mono text-7xl font-bold text-[#315b4c] sm:text-9xl">
                AWP
              </p>
              <p className="mt-3 font-mono text-xs tracking-[0.3em] text-[#477d6b]">
                TECH STORE
              </p>
            </div>

            <span className="absolute right-0 top-8 font-mono text-xs text-[#477d6b]">
              COLLECTION / 001
            </span>

            <span className="absolute bottom-4 left-0 font-mono text-xs text-[#477d6b]">
              TECHNOLOGY & ACCESSORIES
            </span>
          </div>

        </div>
      </section>

      {/* CATEGORÍAS */}
      <section
        id="categorias"
        className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 lg:px-20"
      >
        <div>
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#729184]">
            ENCUENTRA LO QUE BUSCAS
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Explora por categoría.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600">
            Navega entre nuestras diferentes categorías y descubre
            los accesorios disponibles para tu espacio tecnológico.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIAS.map((categoria, index) => (
            <button
              key={categoria.id}
              onClick={() => {
                setCategoriaActiva(categoria.id);
                setBusqueda("");
                document.getElementById("catalogo")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className={`group min-h-[265px] text-left ${categoria.color} p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                categoriaActiva === categoria.id
                  ? "ring-2 ring-[#315b4c]"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-widest text-gray-600">
                  {categoria.codigo}
                </span>
                <span className="font-mono text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex h-32 items-center justify-center">
                <span
                  className={`font-mono text-7xl transition duration-500 group-hover:scale-125 ${categoria.texto}`}
                >
                  {categoria.simbolo}
                </span>
              </div>

              <div className="flex items-end justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold leading-tight">
                    {categoria.nombre}
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-gray-600">
                    {categoria.descripcion}
                  </p>
                </div>

                <span className="shrink-0 text-xl transition group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="bg-[#f2f3ef] py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#729184]">
                PRODUCT COLLECTION
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                {categoriaSeleccionada
                  ? categoriaSeleccionada.nombre
                  : "Todos los productos."}
              </h2>

              <p className="mt-3 text-sm text-gray-600">
                {productosFiltrados.length} productos encontrados
              </p>
            </div>

            <button
              onClick={() => {
                setCategoriaActiva("todos");
                setBusqueda("");
                setOrden("predeterminado");
              }}
              className="w-fit border-b border-black pb-2 font-mono text-xs font-bold hover:text-[#477d6b]"
            >
              VER TODO EL CATÁLOGO ↗
            </button>
          </div>

          {/* BUSCADOR */}
          <div className="mt-10 grid gap-4 border-y border-[#d5d9d2] py-6 md:grid-cols-2">

            <div>
              <label
                htmlFor="buscar"
                className="mb-2 block font-mono text-xs font-bold tracking-widest"
              >
                BUSCAR PRODUCTOS
              </label>

              <input
                id="buscar"
                type="search"
                placeholder="Escribe el nombre de un producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full border border-[#c5cec5] bg-white px-5 py-4 text-sm outline-none transition focus:border-[#477d6b]"
              />
            </div>

            <div>
              <label
                htmlFor="orden"
                className="mb-2 block font-mono text-xs font-bold tracking-widest"
              >
                ORDENAR POR
              </label>

              <select
                id="orden"
                value={orden}
                onChange={(e) => setOrden(e.target.value)}
                className="w-full border border-[#c5cec5] bg-white px-5 py-4 text-sm outline-none focus:border-[#477d6b]"
              >
                <option value="predeterminado">Predeterminado</option>
                <option value="menor">Precio: menor a mayor</option>
                <option value="mayor">Precio: mayor a menor</option>
                <option value="nombre">Nombre: A-Z</option>
              </select>
            </div>
          </div>

          {/* FILTROS */}
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => setCategoriaActiva("todos")}
              className={`px-4 py-2 font-mono text-xs font-bold transition ${
                categoriaActiva === "todos"
                  ? "bg-[#203d34] text-white"
                  : "border border-gray-300 bg-white hover:bg-[#d9ebe5]"
              }`}
            >
              TODOS
            </button>

            {CATEGORIAS.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaActiva(categoria.id)}
                className={`px-4 py-2 font-mono text-xs font-bold transition ${
                  categoriaActiva === categoria.id
                    ? "bg-[#203d34] text-white"
                    : "border border-gray-300 bg-white hover:bg-[#d9ebe5]"
                }`}
              >
                {categoria.nombre.toUpperCase()}
              </button>
            ))}
          </div>

          {/* PRODUCTOS */}
          {productosFiltrados.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productosFiltrados.map((producto) => {
                const agregado = productosAgregados.includes(producto.id);

                return (
                  <article
                    key={producto.id}
                    className="group bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between px-5 pt-5">
                      <span className="font-mono text-[10px] tracking-widest text-gray-500">
                        {producto.etiqueta}
                      </span>

                      <span className="font-mono text-xs text-gray-400">
                        #{String(producto.id).padStart(3, "0")}
                      </span>
                    </div>

                    <div className="relative mx-5 mt-4 flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#f2f3ef]">
                      {producto.imagen ? (
                        <Image
                          src={producto.imagen}
                          alt={producto.nombre}
                          fill
                          sizes="(max-width: 768px) 90vw, 400px"
                          className="object-contain p-8 transition duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#edf4f0] to-[#e1e8e3]">
                          <span className="font-mono text-7xl text-[#477d6b] transition duration-500 group-hover:scale-125">
                            {producto.simbolo}
                          </span>
                          <span className="mt-4 font-mono text-[10px] tracking-[0.2em] text-[#526c61]">
                            AWP / TECH STORE
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-bold">
                          {producto.nombre}
                        </h3>

                        <span className="font-mono font-bold">
                          ${producto.precio.toLocaleString("es-MX")}
                        </span>
                      </div>

                      <p className="mt-3 text-sm text-gray-500">
                        {producto.descripcion}
                      </p>

                      <button
                        onClick={() => agregarProducto(producto.id)}
                        className={`mt-6 w-full border-2 border-black py-3 font-mono text-xs font-bold transition ${
                          agregado
                            ? "bg-[#203d34] text-white"
                            : "bg-white hover:bg-[#f4dc56]"
                        }`}
                      >
                        {agregado ? "✓ AGREGADO" : "AGREGAR AL CARRITO"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 border border-dashed border-[#b8c6ba] bg-white px-6 py-20 text-center">
              <p className="font-mono text-5xl text-[#729184]">⌕</p>

              <h3 className="mt-5 text-xl font-bold">
                No encontramos productos.
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
                Esta categoría todavía no tiene productos registrados
                o no hay coincidencias con tu búsqueda.
              </p>

              <button
                onClick={() => {
                  setCategoriaActiva("todos");
                  setBusqueda("");
                }}
                className="mt-7 bg-[#203d34] px-6 py-3 font-mono text-xs font-bold text-white hover:bg-[#477d6b]"
              >
                VER TODOS LOS PRODUCTOS
              </button>
            </div>
          )}
        </div>
      </section>

      {/* RESUMEN DEL CARRITO */}
      <section className="bg-[#203d34] px-6 py-12 text-white md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 md:flex-row md:items-center">

          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-[#d5dca3]">
              YOUR SELECTION
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Tu selección de productos.
            </h2>

            <p className="mt-2 text-sm text-[#d1ddd6]">
              {productosAgregados.length} artículos seleccionados
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div>
              <p className="font-mono text-xs text-[#d1ddd6]">
                TOTAL
              </p>

              <p className="mt-1 font-mono text-3xl font-bold text-[#f4dc56]">
                ${totalSeleccionado.toLocaleString("es-MX")}
              </p>
            </div>

            <button
              onClick={() => setProductosAgregados([])}
              disabled={productosAgregados.length === 0}
              className="border border-[#d5dca3] px-5 py-3 font-mono text-xs font-bold transition hover:bg-[#d5dca3] hover:text-[#203d34] disabled:cursor-not-allowed disabled:opacity-40"
            >
              LIMPIAR
            </button>
          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-[#f4dc56] px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 md:flex-row md:items-center">

          <div>
            <p className="font-mono text-xs font-bold tracking-[0.2em]">
              ¿NECESITAS AYUDA?
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Estamos aquí para ayudarte.
            </h2>

            <p className="mt-3 text-sm text-[#665c2c]">
              Ponte en contacto con nosotros si tienes alguna pregunta.
            </p>
          </div>

          <Link
            href="/contacto"
            className="w-fit bg-black px-8 py-4 font-mono text-xs font-bold text-white transition hover:bg-[#203d34]"
          >
            IR A CONTACTO ↗
          </Link>

        </div>
      </section>

    </main>
  );
}
