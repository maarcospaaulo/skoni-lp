import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, phone, modality, estimatedValue, downPayment, termInMonths, source } = await request.json();

    if (!name || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const dp = downPayment ?? 0;
    const term = termInMonths ?? 0;
    const src = source ?? 'Simulator';

    const scriptURL = 'https://script.google.com/macros/s/AKfycbydQ4sPoOM8pLp3ZnjKrLL-3KgbXqVmh883iKgqWGVPUGoGZ0x2zEeShu2anPHpUSjM/exec';

    await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify({ name, phone, modality, estimatedValue, downPayment: dp,
        termInMonths: term, source: src }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting lead:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
