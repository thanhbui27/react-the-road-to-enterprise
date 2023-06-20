import './App.scss'
import AnimalExample from '@/components/AnimalExample'
import AnimalExampleWithApiStatus from './components/AnimalExampleWithApiStatus'
import SearchMealExample from './components/SearchMealsExample'
function App() {
  return (
    <div className='App mx-auto max-w-6xl text-center my-8'>
      <h1 className='text font-semibold text-2xl'>React - The Road To Enterprise</h1>
      <AnimalExampleWithApiStatus />
      <SearchMealExample />
    </div>
  )
}
export default App
