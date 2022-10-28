import React from 'react'
import {
  atom,
  useRecoilState,
} from 'recoil';

export const textState = atom({
  key: 'textState',
  default: '', 
});

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default TextInput