import React from 'react'
import Form from 'antd/es/form'
import Input from 'antd/es/input'
import InputNumber from 'antd/es/input-number'
import Button from 'antd/es/button'

import {useDispatch} from 'react-redux' 

import { addUser, updateUser, addUserApi , updateUserApi} from '../Redux/UserAction'


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

const validateMessages = {
    required: '${label} is required!',
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };




function FormBuilder({record, index}) {
  const dispatch = useDispatch();

    const onFinish = values => {
      if(record){
        dispatch(updateUserApi(record.name, values))
        // dispatch(updateUser(values , index))
      }
      else{
        dispatch(addUserApi(values))
        // dispatch(addUser(values))
      // props.addUser(values)
      }

      };
    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} initialValues={record} validateMessages={validateMessages}>
          <Form.Item
            name={['name']}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            name={[ 'age']}
            label="Age"
            rules={[
              {
                type: 'number',
                min: 0,
                max: 99,
              },
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name={[ 'address']}
            label="Address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
         
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
}


// const mapDispatchToProps= (dispatch)=>{
//     return { addUser :(user)=> dispatch(addUser(user))}
//  }

export default FormBuilder
