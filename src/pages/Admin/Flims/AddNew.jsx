import React, { useState } from 'react'
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
import { useFormik } from 'formik'
import { values } from 'lodash';
import moment from 'moment';
const AddNew = () => {
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState('')
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {}
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })
    const handleChangeDatePicker = (value) => {
        // console.log(value);
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
        // console.log(ngayKhoiChieu);
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    }
    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    const handleChangeFile = (e) => {
        let file = e.target.files[0];
        console.log(file);
        // tạo đối tượng để đọc file
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                // console.log(e.target.result);
                setImgSrc(e.target.result);//hình base 64
            }
        }
        // save to formik
        formik.setFieldValue('hinhAnh', file)
    }
    return (
        <Form
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
                span: 5,
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
            }}
        >
            <h3 className='mb-1 text-2xl font-bold'>Thêm mới phim</h3>
            <Form.Item label="Form Size" name="size">
                <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Tên phim">
                <Input name='tenPhim' onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Trailer">
                <Input name='trailer' onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Mô tả">
                <Input name='moTa' onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Ngày khởi chiếu">
                <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
            </Form.Item>
            <Form.Item label="Đang chiếu" valuePropName="checked">
                <Switch name="danhChieu" onChange={handleChangeSwitch('dangChieu')} />
            </Form.Item>
            <Form.Item label="Sắp chiếu" valuePropName="checked">
                <Switch name="sapChieu" onChange={handleChangeSwitch('sapChieu')} />
            </Form.Item>
            <Form.Item label="Hot">
                <Switch name="hot" onChange={handleChangeSwitch('hot')} />
            </Form.Item>
            <Form.Item label="Số sao">
                <InputNumber onChange={handleChangeSwitch('danhGia')} min={1} max={10} />
            </Form.Item>
            <Form.Item label="Hình ảnh">
                <input type='file' onChange={handleChangeFile} accept='image/jpeg,image/jpg,image/gif,image/png ' />
                <img className='my-1' style={{ width: "120px", height: "170px" }} src={imgSrc} alt='...' />
            </Form.Item>
            <Form.Item label="">
                <button type='submit' className='bg-blue-300'>Thêm phim</button>
            </Form.Item>
        </Form >
    );
}

export default AddNew