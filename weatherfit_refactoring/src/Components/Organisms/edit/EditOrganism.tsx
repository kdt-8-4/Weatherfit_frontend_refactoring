import EditWeather from '../../Molecules/post/EditWeather'
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
