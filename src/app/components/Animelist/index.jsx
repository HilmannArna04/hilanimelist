import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    // Jika data kosong atau API bermasalah, tampilkan pesan
    if (!api?.data || api.data.length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <h3 className="text-color-primary text-xl font-bold">Data tidak ditemukan atau API sedang bermasalah.</h3>
            </div>
        )
    }

    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 ">
            {api.data.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-accent hover:text-color-primary transition-all"
                    key={index}
                    >
                        {/* Jika image tidak tersedia, sediakan fallback. Jikan sering memberikan image_url kosong jika gagal memuat */}
                        {anime.images?.webp?.image_url ? (
                            <Image src={anime.images.webp.image_url} alt={anime.title} width={350} height={350} className="w-full max-h-64 object-cover rounded-3xl border-none" />
                        ) : (
                            <div className="w-full h-64 bg-gray-700 flex items-center justify-center rounded-3xl">
                                <p className="text-sm text-gray-400">No Image</p>
                            </div>
                        )}
                        <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList