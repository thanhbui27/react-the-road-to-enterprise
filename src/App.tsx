import "./App.css";
import BusinessCardEditor from "./components/BusinessCardEditor";
import GlobalSpinnerExample from "./components/GlobalSpinnerExample";
import ShoppingList from "./components/ShoppingList";
import TasksBoard from "./components/TasksBoard";
import GlobalSpinnerContextProvider from "./context/GlobalSpinnerContext";
import ShoppingListContextProvider from "./context/ShoppingListContext";

function App() {
  return (
    <GlobalSpinnerContextProvider>
      <ShoppingListContextProvider>
        <div className="App mx-auto max-w-6xl text-center my-8">
          <h1 className="font-semibold text-2xl">
            React - The Road To Enterprise
          </h1>
          <BusinessCardEditor />
          <GlobalSpinnerExample />
          <div className="App mx-auto max-w-6xl text-center my-8">
            <h1 className="font-semibold text-2xl">
              React - The Road To Enterprise
            </h1>
            <TasksBoard />
          </div>
        </div>
        <div className="App mx-auto max-w-6xl text-center my-8">
          <h1 className="font-semibold text-2xl">
            React - The Road To Enterprise
          </h1>
          <ShoppingList />
        </div>
      </ShoppingListContextProvider>
    </GlobalSpinnerContextProvider>
  );
}
export default App;
