import { NextRequest, NextResponse } from 'next/server'

import { mail } from '@/lib/mail'

export async function POST(request: NextRequest) {
  const { email, message } = await request.json()
  console.log('🚀 ~ POST ~ email, message:', email, message)
  const res = await mail.send(email, message)
  console.log('🚀 ~ POST ~ res:', res)
  return new NextResponse('Hello World!')
}
