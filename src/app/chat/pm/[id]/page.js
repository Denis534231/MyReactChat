import React from "react";

export default function myDynamicRoute({ params }) {
  return (
    <>
      <h1>group with: {params.id}</h1>
    </>
  );
}
