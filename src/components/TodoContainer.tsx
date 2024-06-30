import TodoCard from "./TodoCard";
import AddTodoModel from "./addTodoModel";
import TodoFilter from "./todoFilter";




const TodoContainer = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between">
        
       <AddTodoModel/>
        <TodoFilter/>
      </div>
      <div className="bg-primary-gradient rounded-xl h-full w-full  p-[3px] ">
        <div className="bg-white w-full rounded-lg p-1 space-y-1 ">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
