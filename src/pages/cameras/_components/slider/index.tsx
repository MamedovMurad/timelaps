

type Props = {
    path:string
}

export default function CameraSliderUi({path}: Props) {
  return (
    <div className=" overflow-hidden rounded-2xl ">
        <img src={path} alt="" className=" object-cover w-full h-full" />
    </div>
  )
}