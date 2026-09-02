import { getAnimeResponse } from "@/app/lips/api"
import VideoPlayer from "@/app/components/utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params }) => {
    const { id } = await params;

    // 3. Jalankan fungsi fetch dengan id yang sudah aman di-await
    const anime = await getAnimeResponse(`anime/${id}`)

    return (
        // ... sisa kode return kamu
        <>
            <div className="pt-4 px-4">
                <h3 className="text-2xl text-color-primary">{anime?.data?.title} - {anime?.data?.year}
                </h3>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded-full border border-color-primary p-2">
                    <h3>PERINGKAT</h3>
                    <p>{anime?.data?.rank}</p>
                </div>

                <div className="w-36 flex flex-col justify-center items-center rounded-full border border-color-primary p-2">
                    <h3>SKOR</h3>
                    <p>{anime?.data?.score}</p>
                </div>

                <div className="w-36 flex flex-col justify-center items-center rounded-full border border-color-primary p-2">
                    <h3>ANGGOTA</h3>
                    <p>{anime?.data?.members}</p>
                </div>

                <div className="w-36 flex flex-col justify-center items-center rounded-full border border-color-primary p-2">
                    <h3>EPISODE</h3>
                    <p>{anime?.data?.episodes}</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-4 text-color-primary">
                {anime?.data?.images?.webp?.image_url ? (
                    <Image
                        src={anime.data.images.webp.image_url}
                        alt={anime.data.title}
                        width={250}
                        height={350}
                        priority
                        className="rounded object-cover max-w-[250px] w-full"
                    />
                ) : (
                    <div className="w-[250px] h-[350px] bg-gray-700 flex items-center justify-center rounded">
                        <p className="text-sm text-gray-400">No Image Available</p>
                    </div>
                )}
                {/* Pastikan tag <p> ini berada di dalam container yang benar */}
                <p className="text-justify text-xl flex-1">{anime?.data?.synopsis}</p>
            </div>
            <div >
                <VideoPlayer youtubeId={anime?.data?.trailer?.youtube_id} />
            </div>
        </>
    )
}

export default Page