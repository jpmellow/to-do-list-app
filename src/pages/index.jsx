import { TodoList } from "@/components/TodoList";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}
