import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import { useEffect, useState } from 'react';
// import { quanLyRapService } from '../../../services/quanlyRapService';

const Showtime = () => {
  const { state, setState } = useState({
    heThongRapChieu: [],
    cumRapChieu: []
  })
  useEffect(async () => {
    try {
      // let result = await quanLyRapService.layDanhSachHeThongRap();

    } catch (error) {
      
    }
  }, [])
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChangeHeThongRap = () => {

  }
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 1200,
      }} mb-1
    >
      <h3 className='font-bold text-2xl mb-1'>Tạo lịch chiếu</h3>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Hệ thống rạp">
        <Cascader
          options={[
            {
              value: 'AAA',
              label: 'AAA',
            },
            {
              value: "BBB",
              label: "BBB"
            }
          ]}
          placeholder="Chọn hệ thống rạp"
        />
      </Form.Item>
      <Form.Item label="Cụm rạp">
        <Cascader
          options={[
            {
              value: 'AAA',
              label: 'AAA',
            },
            {
              value: "BBB",
              label: "BBB"
            }
          ]}
          placeholder="Chọn cụm rạp"
          onChange={handleChangeHeThongRap}
        />
      </Form.Item>
      <Form.Item label="Ngày chiếu, giờ chiếu">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Giá vé">
        <InputNumber min={75000} max={150000} />
      </Form.Item>
      <Form.Item label="">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Tạo lịch chiếu</Button>
      </Form.Item>
    </Form>
  );
}

export default Showtime