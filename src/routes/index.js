import * as api from '$lib/api'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
    
    const { data } = await api.get("/temp/all/test")
    
   
    return {
        status: 200,
        headers: {
            'cache-control': 'public, max-age=300'
        },
        body: {
            data: data
        }
    };
  }