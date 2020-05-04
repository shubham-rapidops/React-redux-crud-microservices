import React, { useState} from 'react'
import Modal from 'antd/es/modal'
import Button from 'antd/es/button'
import {EditOutlined} from '@ant-design/icons'


function ModalBox({title ,  children}) {
    
    const [visible, setvisible] = useState(false)

    const showModal = () => {
        setvisible(true)
      };
    
    const  handleOk = e => {
        console.log(e);
        setvisible(false)
      };
    
    const handleCancel = e => {
        
        setvisible(false)
      };
    return (
        <div>
          <Button type="primary" onClick={showModal} icon={title == 'update' ? <EditOutlined />: '' }>
            {title == 'update' ? '' : title}
          </Button>
          <Modal
            title={ `${title} modal `}
            visible={visible}
            // onOk={handleOk}
            onCancel={handleCancel}
            okButtonProps={{display:false}}
          >
           {children}
          </Modal>
        </div>
      );
}

export default ModalBox
