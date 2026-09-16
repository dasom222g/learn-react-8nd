import Card from "./components/Card";
import Greeting from "./components/Greeting";


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
      {/* <Greeting />
      <Greeting /> */}
      {/* 미션: Card컴포넌트 만들고, 이 자리에서 호출 */}
      <Card imgUrl={"https://cf.product-image.s.zigzag.kr/original/c/17/138/640/171386405-4363396649420740706.jpeg?width=400&height=400&quality=80&format=webp"} itemName={"하늘색 가디건"}  />
      <Card />
      <Card />
    </div>
  );
}

export default App;
