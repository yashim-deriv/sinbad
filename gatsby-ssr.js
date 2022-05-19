import React from 'react'

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
    return <section {...props}>{element}</section>
}
