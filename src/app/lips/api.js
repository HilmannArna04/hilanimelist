export const getAnimeResponse = async(resource, query) => {
  const url = query ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}` : `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`

  // Tambahkan retry mechanism karena Jikan API sering rate limit/timeout
  let retries = 3;
  while (retries > 0) {
    try {
      const response = await fetch(url, {
        next: { revalidate: 60 },
        // Jangan cache error
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
    return response.data.flatMap(item => item[objectProperty])
}
 
export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = {
        data: data.slice(first, last)
    }

    return response
}