import Image from "next/image"
import Link from "next/link"

const AnimeList = ({api}) =>{
    return <>
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
{api.data.map((anime, idx) => {
    const uniqueKey = `${anime.title}-${idx}`
    return(
        <div key={uniqueKey}>
        <Link href={`/${anime.mal_id}`} className="text-color-primary hover:text-color-accent transition-all cursor-pointer">
        <Image src={anime.images.webp.image_url} alt="..." width={500} height={500} className="w-full max-h-100 object-cover"/>
        <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
    </Link>
    </div>
    )
})}

</div>     
   
 </>
}

export default AnimeList