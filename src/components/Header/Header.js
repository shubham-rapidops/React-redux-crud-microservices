import React from 'react'
import PageHeader from 'antd/es/page-header'
function Header(props) {
    return (
        <div>
            <PageHeader
            ghost={false}
            title={props.title}
            ></PageHeader>
        </div>
    )
}

export default Header
