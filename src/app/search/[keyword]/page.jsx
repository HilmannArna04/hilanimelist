import { getAnimeResponse } from "@/app/lips/api"
import AnimeList from "@/app/components/Animelist"
import Header from "@/app/components/Animelist/Header"
import { notFound } from "next/navigation"

const Page = async ({ params }) => {
    const { keyword } = await params

    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

    // Jika data tidak ada atau array kosong, panggil notFound() agar muncul halaman not-found
    if (!searchAnime?.data || searchAnime.data.length === 0) {
        notFound()
    }

    return (
        <>
            <section>
                <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}

export default Page