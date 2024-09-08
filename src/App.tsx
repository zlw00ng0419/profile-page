import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      ></div>
      <ul>
        <li style={{ fontSize: '40px', listStyleType: 'none' }}>
          &lt;최지웅&gt;
        </li>
        <li>조선해양공학과 23학번</li>
        <li>ESTJ</li>
        <li>프로그래밍 경험이 전혀 없어서 많이 배우고 싶습니다!!</li>
        <li>처음에 낯을 좀 가리지만 친해지면 활발해집니다! 잘 부탁드립니다!</li>
      </ul>
    </div>
  );
}

export default App;
