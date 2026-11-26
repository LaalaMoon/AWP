
'use client'

import { useState } from 'react';

const CONTACTO = {
  Correo: 'val8878@hotmail.com',
  Numero: '9931896729',
  Direccion: 'La Lima, Parrilla, Villahermosa, Tabasco'
};

export default function ContactoPage() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Mensaje del formulario:', {
      nombre,
      correo,
      telefono,
      mensaje
    });
  };

  return (
    <main className="min-h-screen bg-[#f5f3e9] text-[#263b32]">

      {/* Encabezado */}
      <section className="px-6 pt-14 pb-12 text-center">
        <p className="mb-3 text-sm font-bold tracking-[0.25em] text-[#84947d]">
          ESTAMOS PARA AYUDARTE
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#294438]">
          Contacto
        </h1>

        <div className="w-16 h-1 bg-[#e6bd58] mx-auto mt-5 mb-5 rounded-full" />

        <p className="max-w-xl mx-auto text-[#68766b] leading-relaxed">
          ¿Tienes alguna duda sobre nuestros productos o necesitas ayuda?
          Escríbenos. Nos encantará atenderte.
        </p>
      </section>

      {/* Contenido principal */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Información de contacto */}
          <aside className="lg:col-span-2 bg-[#294438] text-[#f5f3e9] rounded-2xl p-8 md:p-10 flex flex-col">
            <p className="text-sm tracking-widest text-[#d9c987] font-semibold mb-3">
              INFORMACIÓN
            </p>

            <h2 className="text-2xl font-bold mb-4">
              Hablemos
            </h2>

            <p className="text-[#d5ddd4] leading-relaxed mb-10">
              Puedes comunicarte con nosotros mediante cualquiera
              de los siguientes medios.
            </p>

            <div className="flex flex-col gap-8">

              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 shrink-0 rounded-full bg-[#40594a] flex items-center justify-center text-[#e9c86c] text-xl">
                  ✉
                </div>
                <div>
                  <p className="text-sm text-[#b9c9ba] mb-1">
                    Correo electrónico
                  </p>
                  <a
                    href={`mailto:${CONTACTO.Correo}`}
                    className="break-all hover:text-[#e9c86c] transition"
                  >
                    {CONTACTO.Correo}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 shrink-0 rounded-full bg-[#40594a] flex items-center justify-center text-[#e9c86c] text-xl">
                  ☎
                </div>
                <div>
                  <p className="text-sm text-[#b9c9ba] mb-1">
                    Teléfono
                  </p>
                  <a
                    href={`tel:${CONTACTO.Numero}`}
                    className="hover:text-[#e9c86c] transition"
                  >
                    {CONTACTO.Numero}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 shrink-0 rounded-full bg-[#40594a] flex items-center justify-center text-[#e9c86c] text-xl">
                  ⌖
                </div>
                <div>
                  <p className="text-sm text-[#b9c9ba] mb-1">
                    Ubicación
                  </p>
                  <p className="leading-relaxed">
                    {CONTACTO.Direccion}
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-auto pt-12">
              <div className="border-t border-[#52695a] pt-6">
                <p className="text-sm text-[#c6d0c5]">
                  Gracias por visitar nuestra tienda.
                </p>
                <p className="text-[#e9c86c] font-semibold mt-1">
                  ¡Estamos aquí para ayudarte!
                </p>
              </div>
            </div>
          </aside>

          {/* Formulario */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-7 md:p-10 shadow-sm border border-[#e5e5d8]">

            <p className="text-sm tracking-widest text-[#84947d] font-semibold mb-3">
              ENVÍANOS UN MENSAJE
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#294438] mb-3">
              ¿En qué podemos ayudarte?
            </h2>

            <p className="text-[#778078] mb-8 leading-relaxed">
              Completa el siguiente formulario y déjanos conocer
              tus dudas o comentarios.
            </p>

            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit}
            >

              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-[#354b3e] mb-2"
                >
                  Nombre completo
                </label>

                <input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Escribe tu nombre"
                  required
                  className="w-full rounded-lg border border-[#d9ded4] bg-[#fafbf8] px-4 py-3 text-[#263b32] placeholder:text-[#a1aaa0] outline-none transition focus:border-[#84947d] focus:ring-2 focus:ring-[#84947d]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="correo"
                  className="block text-sm font-semibold text-[#354b3e] mb-2"
                >
                  Correo electrónico
                </label>

                <input
                  id="correo"
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  required
                  className="w-full rounded-lg border border-[#d9ded4] bg-[#fafbf8] px-4 py-3 text-[#263b32] placeholder:text-[#a1aaa0] outline-none transition focus:border-[#84947d] focus:ring-2 focus:ring-[#84947d]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-semibold text-[#354b3e] mb-2"
                >
                  Número de teléfono
                  <span className="font-normal text-[#929b91] ml-2">
                    (Opcional)
                  </span>
                </label>

                <input
                  id="telefono"
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Tu número de teléfono"
                  className="w-full rounded-lg border border-[#d9ded4] bg-[#fafbf8] px-4 py-3 text-[#263b32] placeholder:text-[#a1aaa0] outline-none transition focus:border-[#84947d] focus:ring-2 focus:ring-[#84947d]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-[#354b3e] mb-2"
                >
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  rows={5}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  required
                  className="w-full rounded-lg border border-[#d9ded4] bg-[#fafbf8] px-4 py-3 text-[#263b32] placeholder:text-[#a1aaa0] outline-none transition focus:border-[#84947d] focus:ring-2 focus:ring-[#84947d]/20 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#294438] py-4 px-6 text-white font-bold tracking-wide transition hover:bg-[#3c5948] hover:shadow-md"
              >
                ENVIAR MENSAJE →
              </button>

            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
