import React, { useEffect, useState } from 'react';

const EffectComponent = (props) => {
    const [data, setData] = useState(null)

    useEffect(() => {

        // get data
        async function getData() {
            const res = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await res.json();
            setData(data)
        }

        getData();
    }, [])

    return (
        <div>
            {data ? <img src={data.message} /> : null}
        </div>
    );
};

export default EffectComponent;