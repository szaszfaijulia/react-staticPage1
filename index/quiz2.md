Quiz!

1. What is a React component?
Darabok, amiből összeáll a weboldal, és amit újra fel lehet használni.
A function that returns React elements. (UI)

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
MyComponent, nagy kezdőbetű - PascalCase, nem camelCase

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

<Header />