import React, { useState } from 'react'
import TableUI from './TableUI/TableUI'
import Header from './Header/Header'
import data from './Data/Data'
import ModalBox from './Modal/ModalBox'
import FormBuilder from './FormBuilder/FormBuilder'
import {useSelector } from 'react-redux' 
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import { connect } from 'react-redux'


function Source(props) {
    const [loading, setloading] = useState(false)

    const reload=()=>{
        console.log('callback')
        setloading(true);
        setTimeout(()=>{
            setloading(false);
        },1000)
    }
   console.log('source render')
     const user = useSelector(state=> {
         console.log('selectr')
         return state.user
     })
    
    return (
        <div>
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                   <Header title={'TITLE'} />
                </Col>
                <Col xs={{ span: 8, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <div style={{paddingTop:"3%"}}>
                        <ModalBox title='Add user'>
                           <FormBuilder/>
                        </ModalBox>
                    </div>
                </Col>
            </Row>  
            
            
            
            <TableUI dataSource= {user} columns={data} callback={reload} />
        </div>
    )
}

// const mapStateToProps = state => {
//     return {  user : state.user }
//  }

export default Source
