function coustemrender(reactElement, container) {
    const domelement = document.createElement(reactElement.type);
    // ek ankar tak create kiya hai 
    domelement.innerHTML = reactElement.children;
    for(const prop in reactElement.props) {
        domelement.setAttribute(prop, reactElement.props[prop]); 
    }
    container.appendChild(domelement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'click me to this link',

}


const container = document.querySelector("#root");
coustemrender(reactElement, container);