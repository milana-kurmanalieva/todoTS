import { useState } from "react";

const MainPage: React.FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const addClick = () => {
    if (input.trim() !== "") {
      setData([...data, input]);
      setInput("");
    }
  };

  const deleteClick = (id: number) => {
    setData(data.filter((_, index) => index !== id));
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={addClick}>add</button>
      {data.map((item, index) => (
        <div key={index}>
          {item} <button onClick={() => deleteClick(index)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
