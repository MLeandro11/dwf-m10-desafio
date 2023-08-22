const BASE_URL = 'https://dwf-m9-desafio-two.vercel.app/api';
export function getSavedToken() {
    if (typeof window !== "undefined" && window.localStorage) {
        return localStorage.getItem('token')
    } else {
        return null
    }
}
function savedToken(token: string) {
    return localStorage.setItem('token', token)
}
export function deleteToken() {
    return localStorage.removeItem('token')
}

export async function getToken(email: string, code: string) {
    const { token } = await fetchApi('/auth/token', {
        method: 'POST',
        body: {
            email,
            code: parseInt(code)
        }
    })
    savedToken(token)
}

export async function fetchApi(input: string, options?: any) {
    const token = getSavedToken();

    const url = BASE_URL + input;
    const newOptions = options || {};

    newOptions.headers = {
        ...newOptions.headers,
        'Content-Type': 'application/json'
    }
    if (token) {
        newOptions.headers = {
            ...newOptions.headers,
            Authorization: `Bearer ${token}`
        }
    }
    if (newOptions.body) {
        newOptions.body = JSON.stringify(newOptions.body);
    }
    // console.log(newOptions);
    const res = await fetch(url,
        newOptions
    );

    if (res.status >= 200 && res.status < 300) {
        return await res.json();
    } else {
        throw "error en la peticion " + res.status
    }
}

export async function sendCode(email: string) {
    return await fetchApi('/auth', {
        method: 'POST',
        body: {
            email
        }
    });
}
export async function getMe() {
    return await fetchApi('/me', {
        method: 'GET',
    })
}
export async function updateMe(change: any) {
    return await fetchApi('/me', {
        method: 'PATCH',
        body: change

    })
}

export async function getProductById(id: string): Promise<{
    product: {
        objectID: string
        name: string
        unit_cost: number
        description: string
        images: Array<{
            url: string
        }>
    }
}> {
    return await fetchApi('/products/' + id)
}
export async function createOrder({ productId, orderData }: any) {
    return await fetchApi(`/order?productId=${productId}`, {
        method: 'POST',
        body: orderData
    })
}


export async function getProvinces() {
    const { provincias } = await fetch('https://apis.datos.gob.ar/georef/api/provincias').then(res => res.json())
    return provincias.map((prov: any) => {
        return prov.nombre
    })


}

export async function getLocalities(provincia: string) {
    const { localidades } = await fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia}&aplanar=true&max=2000`).then(res => res.json())
    return localidades.map((loc: any) => {
        return loc.nombre
    })
}

export async function getFeaturedProducts() {
    const { results } = await fetchApi('/search?q=&limit=0&offset=0')
    const products = results.filter((product: any) => {
        return product.unit_cost < 350
    })
    return products.slice(0, 2)
}
