import React from 'react';

import ListNews from './components/listNews';

const Page = (props) => {
    return(
        <ListNews dataNews={props.dataNews} />
    )
}

export default Page;