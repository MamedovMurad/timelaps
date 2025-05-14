import { Col, Flex, Radio } from 'antd'
import { GoProIcon } from "../../svg";
import {
    FieldTimeOutlined,
    FolderOpenOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

type Props = {}

export const CameraTypes = (props: Props) => {
  return (
    <div className=" mb-10">
                <h4 className=" text-white mb-3">
                    Kamera tipi
                </h4>

                <Radio.Group
                    className="custom-radio-group "
                    size="small"
                    value={1}
                    options={[
                        {
                            value: 1,
                        
                            label: (
                                <Flex gap="15px" justify="center" align="center" >
                                    <Col><VideoCameraOutlined className=" text-2xl text-primary" /></Col>
                                    <Col>  <p className=" text-white">DSLR</p></Col>
                                </Flex>
                            ),
                        },
                        {
                            value: 2,
                            label: (
                                <Flex gap="15px"  justify="center" align="center" >
                                    <Col>
                                        <GoProIcon /></Col>
                                    <Col>  <p className=" text-white">GoPro</p></Col>

                                </Flex>
                            ),
                        },

                    ]}
                />
            </div>
  )
}