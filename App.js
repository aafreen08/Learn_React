const h1= React.createElement(
    "h1",
    {
        id:"heading",
        xyz:"abc"
    },
    "Hello World from React"
);
        const root= ReactDOM.createRoot(document.getElementById("root"));
        root.render(h1);