import Link from "next/link";
import Header from "@/app/components/AnimeList/Header";
import AnimeList from "@/app/components/AnimeList/page";
const Search = async ({params}) =>{
    const {keyword} = params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await response.json()
 
  return (
   <section>
<Header title={`Pencarian untuk ${keyword}`}/>
    <AnimeList api={searchAnime}/>
   
    </section>
  );
}

export default Search
