import "./App.css";
import {
  RecoilRoot,
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={3} />
      <Todo id={3} />
    </RecoilRoot>
  );
}

// eslint-disable-next-line react/prop-types
function Todo({ id }) {
  // const currentTodo = useRecoilValue(todosAtomFamily(id));
  // const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  const todo = useRecoilValueLoadable(todosAtomFamily(id));

  if (todo.state === "loading") {
    return <div>Loading...</div>;
  } else if (todo.state === "hasValue") {
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    );
  }
}

export default App;
