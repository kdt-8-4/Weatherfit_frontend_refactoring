interface Props {
  title: string
  value: string
}

export default function ProfileModalInfo({ title, value }: Props) {
  return (
    <div className="flex font-gmarketsans text-[11px] ">
      <p>{title}:</p>
      <p className="text-[gray]">&nbsp;{value}</p>
    </div>
  )
}
