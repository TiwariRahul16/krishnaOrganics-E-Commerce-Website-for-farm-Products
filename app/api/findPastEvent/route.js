import { NextResponse } from 'next/server';
import { findTopEvent } from '@/actions/UserAction'; 

export async function GET() {
    try {
        const result = await findTopEvent(); 
        if (result.status === 'OK') {
            return NextResponse.json(result);
        } else {
            return NextResponse.json({ status: 'Error', message: result.message }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ status: 'Error', message: 'Internal Server Error' }, { status: 500 });
    }
}