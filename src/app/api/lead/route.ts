import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, phone, modality, estimatedValue, downPayment, termInMonths } = await request.json();

    if (!name || !phone || !modality || !estimatedValue || !downPayment || !termInMonths) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbydQ4sPoOM8pLp3ZnjKrLL-3KgbXqVmh883iKgqWGVPUGoGZ0x2zEeShu2anPHpUSjM/exec';

    await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify({ name, phone, modality, estimatedValue, downPayment, termInMonths }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting lead:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
