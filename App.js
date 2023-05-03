{
  /* <div id='parent'>
    <div id='child'>
        <h1>'I am heading'</h1>
                <h2>'I am heading2'</h2>

    </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am heading"),
    React.createElement("h2", {}, "I am heading2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am heading"),
    React.createElement("h2", {}, "I am heading2"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
