import React from 'react'

const Greeting = () => {
  // logic
  let username = "";

  const handleClick = () => {
    // 사용자 이름 텍스트 변경
    username = window.prompt("당신의 이름은 뭔가요?")
  }

  // view
  return (
    <div style={{ "backgroundColor": "pink", "padding": "10px" }}>
      <p>안녕하세요, {username}님!</p>
      <p>오늘도 좋은하루 보내세요😊</p>
      <button type='button' onClick={handleClick}>입력</button>
    </div>
  )
}

export default Greeting