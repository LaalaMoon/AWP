
import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  const redirectUrl = new URL('/cuenta', request.url);

  if (error) {
    redirectUrl.searchParams.set('error', 'cerrar-sesion');
  } else {
    redirectUrl.searchParams.set('sesion', 'cerrada');
  }

  return NextResponse.redirect(redirectUrl, {
    status: 303,
  });
}
