import Greeting from "./Greeting";

function App() {
  // logic
  // 구조분해할당 - object destructuring
  const animals = ["dog", "cat", "pig"];
  // const second = animals[1]

  const [ second, first ] = animals
  
  console.log("🚀 first:", first) // dog

  console.log("🚀 second:", second)

  const todoItem = {
    todo: "React학습하기",
    isComplete: false
  }

  const { todo: todoName } = todoItem
  console.log("🚀 ~ App ~ todo:", todoName)


  // view
  return (
    <div className="App">
      변경~!!
      <Greeting />
      <Greeting />
      {/* 미션: Card컴포넌트 만들고, 이 자리에서 호출 */}
    </div>
  );
}

export default App;
