export const getAnimeResponse = async(resource, query) => {
  // Gunakan fallback URL jika environment variable tidak terbaca di Vercel
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.jikan.moe/v4"
  const url = query ? `${baseUrl}/${resource}?${query}` : `${baseUrl}/${resource}`

  // Tambahkan retry mechanism karena Jikan API sering rate limit/timeout
  let retries = 3;
  while (retries > 0) {
    try {
      const response = await fetch(url, {
        next: { revalidate: 3600 }, // Revalidate tiap 1 jam biar gak keseringan dipanggil pas build
      })

      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }

      const anime = await response.json()
      return anime
    } catch (error) {
      console.log(`API ERROR (${retries} retries left):`, error.message)
      retries -= 1;
      if (retries === 0) {
        // Kembalikan objek dengan data array kosong agar tidak error `.data`
        return { data: [] };
      }
      // Tunggu 1 detik sebelum mencoba lagi
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

export const getNestedAnimeResponse = async(resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    if (!response || !response.data) return []
    return response.data.flatMap(item => item[objectProperty] || [])
}

export const reproduce = (data, gap) => {
    // Pengaman jika data kosong atau undefined
    if (!data || !Array.isArray(data) || data.length === 0) {
        return { data: [] }
    }

    const maxIndex = Math.max(0, data.length - gap)
    const first = Math.floor(Math.random() * maxIndex)
    const last = first + gap

    return {
        data: data.slice(first, last)
    }
}