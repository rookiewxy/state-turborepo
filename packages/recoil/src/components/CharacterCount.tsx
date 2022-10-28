/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-10-28 15:59:16
 * @LastEditors: wxy
 * @LastEditTime: 2022-10-28 16:04:54
 */
import React from 'react'
import {
  selector,
  useRecoilValue,
} from 'recoil';
import { textState } from './TextInput'

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return (<>Character Count: {count}</>)
}

export default CharacterCount 