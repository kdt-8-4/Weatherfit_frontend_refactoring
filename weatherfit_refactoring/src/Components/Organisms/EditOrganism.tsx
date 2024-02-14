import DetailContent from '@/Components/Molecules/DetailContent'
import DetailImage from '@/Components/Molecules/DetailImge'
import DetailCategory from '../Molecules/DetailCategory'
import LikeAndComment from '../Molecules/LikeAndComment'
import DetailProfile from '../Molecules/DetailProfile'
import DetailEtc from '../Molecules/DetailEtc'
import NotFound from '@/app/not-found'
import EditWeather from '../Molecules/EditWeather'
import TextAreaMolecule from '../Molecules/TextAreaMolecule'
import EditHeader from './EditHeader'
import ImageUpload from './ImageUpload'
import SelectCategory from './SelectCategory'

export default async function EditOrganism({ boardId }: BOARDID) {
  const response = await fetch(
    `https://www.jerneithe.site/board/detail/${boardId}`,
    {
      method: 'GET',
    },
  )
  const data: FEEDDATA_detail = await response.json()

  return (
    <div className="h-screen">
      <EditHeader boardId={boardId} />
      <div className="mx-5 h-full">
        <div className="flex-col items-center justify-center mb-7">
          <EditWeather data={data} />
          <ImageUpload data={data} />
        </div>
        <TextAreaMolecule data={data} />
        <hr />
        <SelectCategory data={data} />
      </div>
    </div>
  )
}
