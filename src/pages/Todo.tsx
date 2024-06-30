import Container from "../components/ui/container";
import TodoContainer from "../components/TodoContainer";

const todo = () => {
  return (
    <div>
      <Container>
        <h1 className="text-xl font-semibold text-center my-10">My Todos </h1>
        <TodoContainer></TodoContainer>
      </Container>
    </div>
  );
};

export default todo;
