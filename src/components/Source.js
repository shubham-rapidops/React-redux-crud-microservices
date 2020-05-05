import React, { useEffect } from 'react'
import TableUI from './TableUI/TableUI'
import Header from './Header/Header'
import data from './Data/Data'
import ModalBox from './Modal/ModalBox'
import FormBuilder from './FormBuilder/FormBuilder'
import {useSelector ,useDispatch } from 'react-redux' 
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import { connect } from 'react-redux'
import { fetchUsers } from './Redux/UserAction'


function Source() {
   
    const user = useSelector(state=>state.users)
    const dispatch = useDispatch();
    useEffect(() => {
      // fetchUsers()
      dispatch(fetchUsers())
       
     }, [])

    
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
            
            
            
            <TableUI dataSource= {user} columns={data}/>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {  user : state.user }
//  }
const mapStateToProps = state => {
    return {
      userData: state.user
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers())
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Source)
