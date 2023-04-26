import React, { Fragment, useEffect } from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { useDispatch, useSelector } from 'react-redux';
import { getmovieList } from '../../../store/quanLyPhim/thunkAction';
import { NavLink, Outlet } from 'react-router-dom';



const Film = () => {
  const dispatch = useDispatch()
  const { movieList } = useSelector((state) => state.quanLyPhim)
  console.log("file: Fims.jsx:12 ~ Film ~ movieList:", movieList)
  useEffect(() => {
    dispatch(getmovieList())
  }, [dispatch])
  const data = movieList
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Mã phim',
      dataIndex: 'maPhim',
      key: 'maPhim',
      width: '10%',
      ...getColumnSearchProps('maPhim'),
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      render: (text, film, index) => {
        return <Fragment>
          <img key={index} src={film.hinhAnh} alt="" style={{ width: "100%", height: "140px" }} />
        </Fragment>
      },
      key: 'maPhim',
      width: '15%',

    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
      width: '30%',
      key: 'maPhim',
    },
    {
      title: 'Ngày khởi chiếu',
      dataIndex: 'ngayKhoiChieu',
      width: '15%',
      key: 'maPhim',

    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      width: '30%',
      key: 'maPhim',
      render: (text, film) => {
        return <Fragment>
          {film.moTa.length > 50 ? film.moTa.substr(0, 100) + "..." : film.moTa}
        </Fragment>
      },
    },
    {
      title: 'Hành động',
      dataIndex: 'hanhDong',
      width: '10%',
      key: 'maPhim',
      render: (text, film) => {
        return <Fragment>
          <div className='flex justify-center items-center content-center'>
            <NavLink className="mr-1 text-1xl text-blue-500 " to="/"><i class="fa-solid fa-pen-to-square"></i></NavLink>
            <NavLink className="mr-1 text-1xl  " to="/"><i class="fa-regular fa-trash-can text-red-500"></i></NavLink>
          </div>
        </Fragment>
      },
    },
  ];
  return (
    
    <div className='h-full'>
      <Outlet />
      <h3 className='text-2xl my-1 font-bold'>Quản lý films</h3>
      <Button className='my-1'>Thêm phim +</Button>
      <Table columns={columns} dataSource={data} />
    </div>
  )
};


export default Film