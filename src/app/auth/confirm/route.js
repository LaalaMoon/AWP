
import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);

  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type');
  const next = searchParams.get('next') ?? '/cuenta';

  if (token_hash && type) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      token_hash,
      type,
    });

    if (!error) {
      const redirectUrl = new URL(next, origin);

      if (redirectUrl.origin !== origin) {
        return NextResponse.redirect(`${origin}/cuenta?confirmacion=error`);
      }

      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.redirect(
    `${origin}/cuenta?confirmacion=error`
  );
}
