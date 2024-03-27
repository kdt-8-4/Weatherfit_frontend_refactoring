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
      <div className="mx-5 h-full mt-[50px]">
        <div className="flex-col items-center justify-center mb-7">
          <EditWeather weatherIcon={data.weatherIcon} />
          <ImageUpload images={data.images} mode="edit" />
        </div>
        <TextAreaMolecule initContent={data.content} mode="edit" />
        <hr />
        <SelectCategory initCategory={data.category} mode="edit" />
      </div>
    </div>
  )
}
