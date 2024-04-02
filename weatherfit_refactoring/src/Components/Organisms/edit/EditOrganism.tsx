import Weather from '../../Molecules/post/Weather'
import TextAreaMolecule from '../../Molecules/post/TextAreaMolecule'
import EditHeader from '../../Molecules/header/EditHeader'
import ImageUpload from '../../Molecules/post/ImageUpload'
import SelectCategory from '../../Molecules/post/SelectCategory'

export default async function EditOrganism({ boardId }: BOARDID) {
  const response = await fetch(
    `https://www.jerneithe.site/board/detail/${boardId}`,
    {
      method: 'GET',
    },
  )
  const data: FEEDDATA_detail = await response.json()

  return (
    <>
      <EditHeader boardId={boardId} />
      <main className="flex-1 mx-5 overflow-y-auto">
        <div className="flex-col items-center justify-center mb-7">
          <Weather initialWeatherIcon={data.weatherIcon} />
          <ImageUpload images={data.images} mode="edit" />
        </div>
        <TextAreaMolecule initContent={data.content} mode="edit" />
        <hr />
        <SelectCategory initCategory={data.category} mode="edit" />
      </main>
    </>
  )
}
