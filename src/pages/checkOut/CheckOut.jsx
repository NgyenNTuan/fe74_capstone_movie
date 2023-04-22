import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseOutlined } from '@ant-design/icons'
import style from './CheckOut.module.css'
import './../checkOut/CheckOut.css'
import { getDatVe } from '../../store/quanLyDatVe/thunkAction';
const CheckOut = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.quanLyNguoiDung)
    const { chiTietPhongVe, isLoading } = useSelector((state) => state.quanLyDatVe)
    useEffect(() => {
        dispatch(getDatVe())
    }, [dispatch])
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe

    const renderSeats = () => {
        return danhSachGhe.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''
            let classGheDaDat = ghe.daDat === true ? 'gheDuocChon' : ''
            return <Fragment key={index}>

                <button disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat}`} key={index}>

                    {ghe.daDat ? <CloseOutlined /> : ghe.stt}

                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>

        })
    }
    console.log(thongTinPhim);
    return (
        <div className='container min-h-screen'>
            <div className='grid grid-cols-12 mt-2'>
                <div className='col-span-9'>
                    <div className='flex flex-col items-center mt-5'>
                        <div className='bg-black' style={{ width: '80%', height: '20px' }}>

                        </div>
                        <div className={`${style['trapezoid']} text-center`}>
                            <h3 className='text-black mt-3'>Màn hình</h3>
                        </div>
                        <div className='text-center gr-ghe' >
                            {
                                renderSeats()
                            }
                        </div>
                    </div>
                </div>
                <div className='col-span-3'>
                    <h3 className='text-green-400 text-center text-4xl'>0 đ</h3>
                    <hr />
                    <h3 className='text-xl'>{thongTinPhim.tenPhim}</h3>
                    <p>Địa điểm: {thongTinPhim.tenCumRap}</p>
                    <p>Ngày chiếu: {thongTinPhim.ngayChieu}</p>
                    <hr />
                    <div className='flex flex-row'>
                        <div className='w-4/5'><span className='text-red-400'>Ghế</span></div>
                        <div className='text-right'><span className='text-green-400 text-lg'>0đ</span></div>
                    </div>
                    <hr />
                    <div>
                        <i>Email</i> <br />
                        {
                            user.email
                        }
                    </div>
                    <hr />
                    <div>
                        <i>Phone</i> <br />
                        {
                            user.soDT
                        }
                    </div>
                    <hr />
                    <div>
                        <i>Mã giảm giá</i> <br />
                        <input type="text" />
                    </div>
                    <hr />
                    <div className='mb-0 h-full flex flex-col justify-end'>
                        <div className='bg-green-500 text-white w-full text-center py-3 font-bold text-2xl'>ĐẶT VÉ</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut