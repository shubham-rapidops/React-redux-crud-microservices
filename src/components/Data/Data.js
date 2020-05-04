import React from 'react'

const dataSource = [
    {
      
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text , rowIndex) =>{ 
      return (
        
        <span>
           <a onClick={()=>{handle(rowIndex)}}>Delete</a>
        </span>
      )}
    },
  ];

  const handle=index=>{

  }

  export default  columns