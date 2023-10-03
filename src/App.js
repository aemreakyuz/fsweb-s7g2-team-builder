import { useState } from "react";
import "./App.css";
import MemberListing from "./components/MemberListing";
import Form from "./components/Form";

function App() {
  const [memberList, setMemberList] = useState([]);

  const addMember = (member) => {
    setMemberList([...memberList, member]);
  };
  return (
    <div className="App">
      <div className="App-landing">
        {memberList.length === 0 ? (
          <div>Henüz bir üyemiz yok</div>
        ) : (
          <MemberListing memberList={memberList} />
        )}
        <Form addMember={addMember} />
      </div>
    </div>
  );
}

export default App;
