import EditOrganism from '@/Components/Organisms/edit/EditOrganism'

// type Params {

// }

export default function Edit({ params }: { params: { id: string } }) {
  const { id: boardId } = params

  return (
    <>
      <EditOrganism boardId={boardId} />
    </>
  )
}
