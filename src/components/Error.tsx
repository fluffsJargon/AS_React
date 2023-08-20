import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const errorText = useRouteError();
  return (
    <>
      <h1>Oops!!!</h1>
      <h3>
        {errorText.status}:{errorText.statusText}
      </h3>
    </>
  );
}
