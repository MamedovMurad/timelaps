import { Col, Flex, Form, Radio } from 'antd';
import { GoProIcon } from "../../svg";
import { VideoCameraOutlined } from '@ant-design/icons';

export const CameraTypes = () => {
  return (
    <Form.Item
      name="type"
      label={<span className="text-white">Kamera tipi</span>}
      rules={[{ required: true, message: "Kamera tipi seçilməlidir" }]}
    >
      <Radio.Group className="custom-radio-group" size="small">
        <Radio value="DSLR">
          <Flex gap="15px" justify="center" align="center">
            <Col>
              <VideoCameraOutlined className="text-2xl text-primary" />
            </Col>
            <Col>
              <p className="text-white">DSLR</p>
            </Col>
          </Flex>
        </Radio>

        <Radio value="GoPro">
          <Flex gap="15px" justify="center" align="center">
            <Col>
              <GoProIcon />
            </Col>
            <Col>
              <p className="text-white">GoPro</p>
            </Col>
          </Flex>
        </Radio>
      </Radio.Group>
    </Form.Item>
  );
};
