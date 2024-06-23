import React from 'react'

const DisplayAll = ({ names, params }) => {

    const changeDisplay = () => {
        if(params === null) {
            <div>{names.title}</div>
        } else {
            names.map((name) => {
                return <div>{name.title}</div>
            })
        }
    }

    return (
        <div>

        </div>
    )
}

export default DisplayAll;