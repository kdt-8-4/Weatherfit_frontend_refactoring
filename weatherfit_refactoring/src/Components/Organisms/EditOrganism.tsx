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

  // data 전체 넘겨주지 말고 필요한 것만 넘겨주기

  return (
    <div className="h-screen">
      <EditHeader boardId={boardId} />
      <div className="mx-5 h-full">
        <div className="flex-col items-center justify-center mb-7">
          <EditWeather weatherIcon={data.weatherIcon} />
          <ImageUpload images={data.images} />
        </div>
        <TextAreaMolecule initContent={data.content} />
        <hr />
        <SelectCategory initCategory={data.category} />
        {/* <SelectCategory initialCategory={data.category}/> */}
      </div>
    </div>
  )
}