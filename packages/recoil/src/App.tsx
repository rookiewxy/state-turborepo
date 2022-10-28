import {
  RecoilRoot,
} from 'recoil';
import './App.css'
import TextInput from './components/TextInput'
import CharacterCount from './components/CharacterCount'

function App() {
  return (
    <RecoilRoot>  
      <TextInput/>
      <CharacterCount/>
    </RecoilRoot>
  )
}

export default App
