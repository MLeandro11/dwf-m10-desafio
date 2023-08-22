import { Spinner } from "../spinner";

export function Loading() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "400px",
      }}
    >
      <Spinner />
    </div>
  );
}
