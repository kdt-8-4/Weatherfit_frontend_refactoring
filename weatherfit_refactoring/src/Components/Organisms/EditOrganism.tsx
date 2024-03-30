import { useFetchGet } from '@/utils/useFetch/useFetchGet'
import EditWeather from '../Molecules/EditWeather'
import TextAreaMolecule from '../Molecules/TextAreaMolecule'
import EditHeader from './EditHeader'
import ImageUpload from './ImageUpload'
import SelectCategory from './SelectCategory'
import Loading from './Loading'

export default function EditOrganism({ boardId }: BOARDID) {
  const boardDetailQueryKey = 'boardDetail'
  const boardDetailUrl = `https://www.jerneithe.site/board/detail/${boardId}`
  const boardDetailOptions = { method: 'GET' }

  const { data } = useFetchGet<FEEDDATA_detail>(
    boardDetailQueryKey,
    boardDetailUrl,
    boardDetailOptions,
  )

  return (
    <div className="h-screen">
      <EditHeader boardId={boardId} />
      <main className="mx-5 h-full mt-[50px]">
        <div className="flex-col items-center justify-center mb-7">
          <EditWeather weatherIcon={data.weatherIcon} />
          <ImageUpload images={data.images} mode="edit" />
        </div>
        <TextAreaMolecule initContent={data.content} mode="edit" />
        <hr />
        <SelectCategory initCategory={data.category} mode="edit" />
      </main>
    </div>
  )
}
