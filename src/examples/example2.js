/**
 * Functions
 */

import React from 'react';
import Campaign from '../components/component-function';

const Example2 = () => {

    // campaign button on press
    const onPress = () => {
        alert('open')
    }

    return (
        <Campaign header={'baslık'} title={'title'} body={'body'} onClick={onPress} />
    );
};

export default Example2;