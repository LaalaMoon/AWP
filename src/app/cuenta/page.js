
'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function CuentaPage() {
  const router = useRouter();

  const [modo, setModo] = useState('login');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const supabase = createClient();

  const cambiarModo = (nuevoModo) => {
    setModo(nuevoModo);
    setNombre('');
    setCorreo('');
    setPassword('');
    setConfirmarPassword('');
    setMensaje('');
    setTipoMensaje('');
  };

  // Guardar o actualizar el perfil del usuario
  const guardarPerfil = async (user, nombrePerfil) => {
    const { error } = await supabase
      .from('profiles')
      .upsert(
        {
          id: user.id,
          full_name: nombrePerfil,
        },
        {
          onConflict: 'id',
        }
      );

    if (error) {
      throw new Error(
        'La cuenta se creó, pero no fue posible guardar tu perfil: ' +
        error.message
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMensaje('');
    setTipoMensaje('');

    // Validaciones exclusivas del registro
    if (modo === 'registro') {
      if (password.length < 6) {
        setMensaje('La contraseña debe tener al menos 6 caracteres.');
        setTipoMensaje('error');
        return;
      }

      if (password !== confirmarPassword) {
        setMensaje('Las contraseñas no coinciden.');
        setTipoMensaje('error');
        return;
      }
    }

    setCargando(true);

    try {
      if (modo === 'registro') {
        const { data, error } = await supabase.auth.signUp({
          email: correo,
          password: password,
          options: {
            data: {
              full_name: nombre,
            },
          },
        });

        if (error) throw error;

        if (data.session && data.user) {
          await guardarPerfil(data.user, nombre);

          router.push('/');
          router.refresh();
        } else {
          setModo('login');
          setNombre('');
          setPassword('');
          setConfirmarPassword('');

          setMensaje(
            'Tu cuenta fue creada. Ahora puedes iniciar sesión.'
          );
          setTipoMensaje('exito');
        }

      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: correo,
          password: password,
        });

        if (error) throw error;

        if (data.user) {
          const nombrePerfil =
            data.user.user_metadata?.full_name ||
            data.user.email ||
            'Usuario';

          await guardarPerfil(data.user, nombrePerfil);
        }

        router.push('/');
        router.refresh();
      }

    } catch (error) {
      let mensajeError = 'Ocurrió un error. Inténtalo nuevamente.';

      if (error.message.includes('Invalid login credentials')) {
        mensajeError = 'Correo electrónico o contraseña incorrectos.';
      } else if (error.message.includes('User already registered')) {
        mensajeError = 'Este correo electrónico ya tiene una cuenta.';
      } else if (error.message.includes('Password should be')) {
        mensajeError = 'La contraseña no cumple los requisitos.';
      } else if (error.message.includes('Email not confirmed')) {
        mensajeError = 'Debes confirmar tu correo electrónico.';
      } else if (error.message.includes('Too many requests')) {
        mensajeError = 'Demasiados intentos. Espera un momento.';
      } else if (error.message.includes('La cuenta se creó')) {
        mensajeError = error.message;
      }

      setMensaje(mensajeError);
      setTipoMensaje('error');

    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f3e9] text-[#263b32] px-6 py-16">

      <section className="max-w-md mx-auto">

        <div className="text-center mb-8">
          <p className="text-sm font-bold tracking-[0.25em] text-[#84947d] mb-3">
            TU ESPACIO PERSONAL
          </p>

          <h1 className="text-4xl font-bold text-[#294438]">
            Mi cuenta
          </h1>

          <div className="w-16 h-1 bg-[#e6bd58] mx-auto mt-5 mb-4 rounded-full" />

          <p className="text-[#68766b]">
            Accede a tu cuenta o regístrate para comenzar.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#e5e5d8] overflow-hidden">

          {/* Selector de formularios */}
          <div className="grid grid-cols-2">

            <button
              type="button"
              onClick={() => cambiarModo('login')}
              className={`py-4 font-bold transition ${
                modo === 'login'
                  ? 'bg-[#294438] text-white'
                  : 'bg-[#eef0e8] text-[#68766b] hover:bg-[#e4e9df]'
              }`}
            >
              Iniciar sesión
            </button>

            <button
              type="button"
              onClick={() => cambiarModo('registro')}
              className={`py-4 font-bold transition ${
                modo === 'registro'
                  ? 'bg-[#294438] text-white'
                  : 'bg-[#eef0e8] text-[#68766b] hover:bg-[#e4e9df]'
              }`}
            >
              Crear cuenta
            </button>

          </div>

          <div className="p-7 md:p-9">

            <h2 className="text-2xl font-bold text-[#294438] mb-2">
              {modo === 'login'
                ? '¡Bienvenido de nuevo!'
                : 'Crea tu cuenta'}
            </h2>

            <p className="text-sm text-[#778078] mb-8">
              {modo === 'login'
                ? 'Ingresa tus datos para acceder.'
                : 'Completa tus datos para registrarte.'}
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >

              {modo === 'registro' && (
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
                    autoComplete="name"
                    className="w-full rounded-lg border border-[#d9ded4] bg-[#fafbf8] px-4 py-3 text-[#263b32] placeholder:text-[#a1aaa0] outline-none focus:border-[#84947d] focus:ring-2 focus:ring-[#84947d]/20"
                  />
                </div>
              )}

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
                  autoComplete="email"
                  className="w-full rounded-lg border border-[#d9ded4] bg-[#fafbf8] px-4 py-3 text-[#263b32] placeholder:text-[#a1aaa0] outline-none focus:border-[#84947d] focus:ring-2 focus:ring-[#84947d]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-[#354b3e] mb-2"
                >
                  Contraseña
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                  required
                  minLength={modo === 'registro' ? 6 : undefined}
                  autoComplete={
                    modo === 'login'
                      ? 'current-password'
                      : 'new-password'
                  }
                  className="w-full rounded-lg border border-[#d9ded4] bg-[#fafbf8] px-4 py-3 text-[#263b32] placeholder:text-[#a1aaa0] outline-none focus:border-[#84947d] focus:ring-2 focus:ring-[#84947d]/20"
                />
              </div>

              {modo === 'registro' && (
                <div>
                  <label
                    htmlFor="confirmarPassword"
                    className="block text-sm font-semibold text-[#354b3e] mb-2"
                  >
                    Confirmar contraseña
                  </label>

                  <input
                    id="confirmarPassword"
                    type="password"
                    value={confirmarPassword}
                    onChange={(e) => setConfirmarPassword(e.target.value)}
                    placeholder="Repite tu contraseña"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    className="w-full rounded-lg border border-[#d9ded4] bg-[#fafbf8] px-4 py-3 text-[#263b32] placeholder:text-[#a1aaa0] outline-none focus:border-[#84947d] focus:ring-2 focus:ring-[#84947d]/20"
                  />
                </div>
              )}

              {/* Mensajes */}
              {mensaje && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-lg p-4 text-sm ${
                    tipoMensaje === 'error'
                      ? 'bg-red-50 text-red-700 border border-red-200'
                      : 'bg-green-50 text-green-700 border border-green-200'
                  }`}
                >
                  {mensaje}
                </div>
              )}

              {modo === 'login' && (
                <div className="text-right">
                  <span className="text-sm text-[#929b91]">
                    ¿Olvidaste tu contraseña?
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={cargando}
                className="w-full rounded-lg bg-[#294438] py-4 px-6 text-white font-bold tracking-wide transition hover:bg-[#3c5948] hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {cargando
                  ? 'PROCESANDO...'
                  : modo === 'login'
                    ? 'INICIAR SESIÓN'
                    : 'CREAR CUENTA'}
              </button>

            </form>

            <div className="text-center mt-8 pt-6 border-t border-[#e5e5d8]">

              <p className="text-sm text-[#778078]">
                {modo === 'login'
                  ? '¿Todavía no tienes una cuenta?'
                  : '¿Ya tienes una cuenta?'}
              </p>

              <button
                type="button"
                onClick={() =>
                  cambiarModo(modo === 'login' ? 'registro' : 'login')
                }
                className="mt-2 font-bold text-[#71866e] hover:text-[#294438] transition"
              >
                {modo === 'login'
                  ? 'Regístrate aquí'
                  : 'Inicia sesión aquí'}
              </button>

            </div>

          </div>
        </div>

        <p className="text-center text-xs text-[#929b91] mt-6">
          Tu información será utilizada para gestionar tu cuenta.
        </p>

      </section>
    </main>
  );
}
