import React, { useState } from 'react'
import Table from 'antd/es/table'
import {useDispatch} from 'react-redux' 
import { deleteUser, deleteUserApi } from '../Redux/UserAction'
import ModalBox from '../Modal/ModalBox'
import FormBuilder from '../FormBuilder/FormBuilder'
import {DeleteOutlined} from '@ant-design/icons'
import Button from 'antd/es/button'



function TableUI({dataSource}) {

  console.log("table render")
  const dispatch = useDispatch();

  const handle = (index , record) => {      
    // dispatch(deleteUser(index))
    dispatch(deleteUserApi(record.name,record.address))
    // callback();        
  }
  
  

  const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        editable:true
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        editable:true
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        editable:true

      },
      {
        title: 'Action',
        key: 'action',
        render: (text ,record, rowIndex) =>{ 
        return (
          <div>
            <div>
              <span>
              <Button  type="danger" icon={<DeleteOutlined />} onClick={()=>{handle(rowIndex , record)}} />
              <ModalBox title='update'><FormBuilder record={record} index={rowIndex}/></ModalBox>
              </span>
            </div>
            <div>
              <span>
                
                {/* <ModalBox title='update'><UpdateFrom record={record} index={rowIndex}/></ModalBox> */}
                {/* <a onClick={()=>{update(record,rowIndex)}} >Update</a> */}
              </span>
            </div>
          </div>
          
        )}
      },
  ];
  
      
    
    return (
        <div style={{paddingTop:'auto'}}>

          <Table 
            dataSource={dataSource} 
            columns={columns}
            rowClassName={() => 'editable-row' }
            pagination={{ position:'bottomRight', pageSize: 5 }}
            size="middle"
          />;

        </div>
    )
}

export default TableUI


