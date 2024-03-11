import { TodoList } from "@/components/TodoList";
import { Container } from "react-bootstrap";
import Link from "next/link";


export default function Home() {
  return (
    <Container>
      <TodoList />
      <Link href="/about">About</Link>
    </Container>
  );
}
