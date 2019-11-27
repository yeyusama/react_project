import React, { Component } from 'react'
import withCheckLogin from '../../containers/with-check-login';

@withCheckLogin

class NotMatch extends Component {
    render() {
        return (
            <div>
                <h1>404...你要访问的页面不见啦！请刷新再试试扒~</h1>
            </div>
        )
    }
}
export default NotMatch