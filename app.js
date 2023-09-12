    // creating react element
    const heading = React.createElement('h1',{id:"heading" },'This is react app')

    // creating root in DOM
    const root = ReactDOM.createRoot(document.getElementById('root'))

    // render the element
    root.render(heading)