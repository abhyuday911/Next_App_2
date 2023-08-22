"use client";

import {axios} from "@/utils/axios";
import Link from "next/link";

export default function Home() {
  const clickHandler = async () => {
    const { data } = await axios.get("/posts");
    console.log(data);
  };

  return (
    <main className="container">
      <div className="d-flex p-5 gap-4">
        <Link href="/signup">signup</Link>
        <Link href="/signin">signin</Link>
      </div>
      <div className="list-group">
        <Link className="list-group-item" href="/signin/a">
          a
        </Link>
        <Link className="list-group-item" href="/signin/b">
          b
        </Link>
        <Link className="list-group-item" href="/signin/c">
          c
        </Link>
        <Link className="list-group-item" href="/signin/home">
          home
        </Link>
      </div>
      <button
        onClick={clickHandler}
        className="btn btn-primary w-100 mt-3 btn-lg"
      >
        Get Data
      </button>
    </main>
  );
}
