import AnimeList from "./components/Animelist"
import Header from "./components/Animelist/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "./lips/api"

const Page = async () => {
 const topAnime = await getAnimeResponse("top/anime", "limit=8")
 let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
 recommendedAnime = reproduce(recommendedAnime, 8)


  return (
    <>
     <section>
      <Header title="TopAnime" linkTitle="Lihat Semua" linkHref="/populer"/>
      <AnimeList api={topAnime}/>
     </section>
     <section>
      <Header title="Rekomendasi"/>
      <AnimeList api={recommendedAnime}/>
     </section>
    </>
  )
}


export default Page