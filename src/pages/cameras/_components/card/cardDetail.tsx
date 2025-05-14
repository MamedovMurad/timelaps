import { Flex, Progress } from 'antd'


type Props = {}

export default function CardDetail({}: Props) {
  return (
    <div>
    <Flex gap="24px" className=" pr-5">
        <div className=" w-1/2 box-border">
            <h5 className=" font-normal text-base  mb-4">CPU</h5>
            <div className="flex justify-between items-center text-xs">
                <span>40 TB</span>
                <span>80 TB</span>
            </div>
            <Progress strokeColor={"#F58020"} percent={70} showInfo={false} />
        </div>
        <div className=" w-1/2 box-border">
            <h5 className=" font-normal text-base mb-4 ">RAM</h5>
            <div className="flex justify-between items-center text-xs">
                <span>40 TB</span>
                <span>80 TB</span>
            </div>
            <Progress strokeColor={"#50C878"} percent={80} showInfo={false} />
        </div>
    </Flex>



    <Flex gap="large" className=" mt-6">
        <div className=" w-1/2 box-border">
            <h5 className=" font-normal text-base mb-4 ">SD CARD</h5>
            <div className="flex justify-between items-center text-xs">
                <span>40 TB</span>
                <span>80 TB</span>
            </div>
            <Progress percent={45} showInfo={false} />
        </div>

    </Flex>
</div>
  )
}