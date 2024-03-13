import FeedSearchSort from "@/Components/Organisms/FeedSearchSort";
import FeedContents from "@/Components/Organisms/FeedContents";
import NavBar from '@/Components/Molecules/NavBar'


export default async function Feedpage(){
    const feedDataFetch = await fetch('https://www.jerneithe.site/board/list', {
      method: 'GET',
    }) 


    const feedContentsData: FEEDDATA[] = await feedDataFetch.json()
    
    return(<>
        <FeedSearchSort />
        <FeedContents response={feedContentsData} />
        <NavBar/>
    </>)
}