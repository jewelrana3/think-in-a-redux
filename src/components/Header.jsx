import notesImage from "../assets/images/notes.png";
import doubleTicks from "../assets/images/double-tick.png";
import plus from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";
import { useState } from "react";
import { ADDED } from "../redux/todos/actionTypes";

export default function Header() {
  // const todos = useSelector((state) => state.todos);
  const [input, setInput] = useState("");


  const handlechangeInput = (e) => {
    setInput(e.target.value)
  }
  const dispatch = useDispatch();

  const handleAllCompleteTasks = () => {
    dispatch(allCompleted())
  }

  const handleAllClear = () => {
    dispatch(clearCompleted())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(input))
  }

  return (
    <div>
      <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handleSubmit}>
        <img src={notesImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handlechangeInput}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" >
          <img className="w-4 h-4" src={doubleTicks} alt="Complete" />
          <span onClick={handleAllCompleteTasks}>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleAllClear}>Clear completed</li>
      </ul>
    </div>
  );
}
