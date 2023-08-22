"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    router.push("/signin");
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="container d-flex flex-column gap-3 mt-5"
      >
        <input className="form-control" type="text" placeholder="username" />
        <input className="form-control" type="text" placeholder="password" />
        <button className="btn btn-success">Signup</button>
      </form>
    </div>
  );
};

export default page;
