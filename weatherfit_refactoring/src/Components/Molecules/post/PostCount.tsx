interface Props {
  title: string
  count: number
}

export default function PostCount({ title, count }: Props) {
  return (
    <div className="flex items-center flex-col font-Cafe24SsurroundAir text-sm">
      <p className="font-bold">{title}</p>
      <p>{count}</p>
    </div>
  )
}
