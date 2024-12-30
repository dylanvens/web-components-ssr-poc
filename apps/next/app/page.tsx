import { Button } from "@repo/ui";

export default function Home() {
  return (
    <main>
      <Button>Button text</Button>
      <Button inversed>Button text</Button>
      <Button variant="secondary">Button text</Button>
      <Button variant="buy">Button text</Button>
      <Button variant="buy" disabled>Button text</Button>
    </main>
  );
}
