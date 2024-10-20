import Link from "next/link";
import React from "react";

type CalloutProps = {
  text: "string";
  link: "string";
};

export function Button({ text, link }: CalloutProps) {
  return (
    <Link href={link}>
      <button>{text}</button>
    </Link>
  );
}
