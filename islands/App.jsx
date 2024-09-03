import { TodoCounter } from "../components/TodoCounter.jsx";
import { TodoList } from "../components/TodoList.jsx";
import { TodoItem } from "../components/TodoItem.jsx";
import { TodoSearch } from "../components/TodoSearch.jsx";
import { Button } from "../components/Button.tsx";
function App() {
    return (
        <div className="App m-3 p-3">
            <TodoCounter completed={2} total={10} />
            <TodoSearch />
            <TodoList>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </TodoList>

            <Button />
        </div>
    )
}

export default App;