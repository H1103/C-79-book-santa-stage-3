import React, {Component} from 'react';
import { render } from 'react-dom';
import { ShadowPropTypesIOS } from 'react-native';
import {Header, Icon, Badge} from 'react-native-elements';

const MyHeader = props => {
    return(
        <Header 
         centerComponent = {{
           text : props.title,
           style : {color: '#90A5A9',
           fontSize: '20',
           fontWeight: 'bold'
            }}}>
         </Header>
    );
}

export default MyHeader;