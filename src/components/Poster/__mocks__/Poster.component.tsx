import { PropsWithChildren } from "react";

export default function Poster({ children }: PropsWithChildren) {
  return <div data-testid="Poster">{children}</div>;
}
