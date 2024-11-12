import "./CSS/TodoItems.css";
import tick from "./Assets/tick.png";
import cross from "./Assets/cross.png";
import not_tick from "./Assets/not_tick.png";

const TodoItmes = ({ no, display, text, setTodos }) => {
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };

  const deletItem = (no) => {
    console.log("clicked");
    let data = JSON.parse(localStorage.getItem("todos"));
    console.log("here >>", data);
    console.log("the no is", no);
    data = data.filter((item) => {
      return item.no != no;
    });
    console.log("here >>", data);
    setTodos(data);
  };

  const displayText = (text) => {
    if (text.length > 30) return text.substr(0, 30) + "...";
    else return text;
  };

  return (
    <div className="todoitems">
      <div
        className={`todocontainer ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={not_tick} alt="not-tick icon" />
        ) : (
          <img src={tick} alt="tick icon" />
        )}
        <div className="todoitems-text">{displayText(text)}</div>
      </div>
      <img
        className="todoitems-cross-icon"
        src={cross}
        alt="cross item"
        onClick={() => {
          deletItem(no);
        }}
      />
    </div>
  );
};

export default TodoItmes;
