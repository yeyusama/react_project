import React, { Component } from 'react';
import withCheckLogin from '../../containers/with-check-login';

import BasicLayout from '../basic-layout/index'

@withCheckLogin
class Home extends Component {
    render() {
        return (
            <div>
               <BasicLayout>home</BasicLayout>
            </div>
        )
    }
}
export default Home;