import React from 'react'
import styled from '@emotion/styled'

const CodeSandbox = styled.div({
    textAlign: 'left',
    background: 'red',
    margin: '0 !important',
    width: '100vw',
    height: '100vh',
    '& iframe': {
        // needed to override inline styles from syntax highlighting
        margin: '0 !important',
        width: '100vw',
        height: '100vh',
        overflow: 'auto',

    },
})

export default props => <CodeSandbox {...props}>
    <iframe src="https://codesandbox.io/embed/new"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"/>
</CodeSandbox>
