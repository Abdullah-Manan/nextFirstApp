"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1>Hello world</h1>
      <Link href="/about">Go to About Page</Link>
      <br />
      <Link href="/login">Go to Login Page</Link>
      <br />
      <button
        onClick={() => {
          router.push("/login");
        }}
      >
        Login Page
      </button>
      <button
        onClick={() => {
          router.push("/about");
        }}
      >
        About Page
      </button>
    </>
  );
}
