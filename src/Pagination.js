import React from 'react'

export default function Pagination({gotoNextPage, gotoPrevPage}) {
    return (
        <div>
            {gotoPrevPage ? <button onClick={gotoPrevPage}>previous</button> : null}
            {gotoNextPage ? <button onClick={gotoNextPage}>Next</button> : null}
        </div>
    )
}
