import './App.css'
import ImageUploader from './components/Main'
import ImageProvider from './context'

function App() {
  return (
    <ImageProvider>
      <ImageUploader/>
    </ImageProvider>
    )
  }
    

export default App
