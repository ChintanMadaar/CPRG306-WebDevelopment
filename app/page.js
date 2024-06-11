// import React from "react";
import Link from "next/link";

const RootPage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">week-2</Link>
        <br />
        <Link href="/week-3">week-3</Link>
        <br />
        <Link href="/week-4">week-4</Link>
        <br />
        <Link href="/week-5">week-5</Link>
      </p>
    </div>
  );
};

export default RootPage;
