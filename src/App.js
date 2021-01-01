import "./App.css";
import { List } from "react-virtualized";
import data from "./scenic_spot_C_f.json";

// List data as an array of strings

let dataList = data.XML_Head.Infos.Info;

console.log(dataList);

function rowRenderer({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}) {
  return (
    <div className="row" key={key} style={style}>
      <span className="cell">
        {" "}
        {dataList[index].Region ? dataList[index].Region : "無"}
      </span>
      <span className="cell">
        {" "}
        {dataList[index].Town ? dataList[index].Town : "無"}
      </span>
      <span className="cell"> {dataList[index].Name}</span>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="logo">MADE WITH ♥️ BY JOHN</div>
      <header>
        <span>
          <strong>Region</strong>
        </span>
        <span>
          <strong>Town</strong>
        </span>
        <span>
          <strong>Name</strong>
        </span>
      </header>
      <List
        width={700}
        height={400}
        rowCount={dataList.length}
        rowHeight={30}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}

export default App;
