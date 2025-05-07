import React from "react";

export default function myDynamicRoute({ params }) {
  return (
    <>
      <h1>chat with: {params.id}</h1>
    </>
  );
}
