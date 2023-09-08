const heading = React.createElement("h1", {id:"heading"}, "Helloworldfromreact");
     

const head = React.createElement("h1", {}, "Hey");
const head2 = React.createElement("h1", {}, "Hello");
const div = React.createElement("div", { id: "child" }, [head,head2]);
const divp = React.createElement("div", { id: "parent" }, div); const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divp);
