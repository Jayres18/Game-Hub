export default function Loading() {
  // Add fallback UI that will be shown while the route is loading.
  return <LoadingSkeleton />;
}

function LoadingSkeleton() {
  // Simple inline skeleton component to avoid missing identifier error.
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      style={{ display: "inline-block" }}
    >
      <div
        style={{
          backgroundColor: "#e5e7eb",
          height: 16,
          width: "60%",
          marginBottom: 8,
          borderRadius: 4,
        }}
      />
      <div
        style={{
          backgroundColor: "#e5e7eb",
          height: 12,
          width: "80%",
          marginBottom: 8,
          borderRadius: 4,
        }}
      />
      <div
        style={{
          backgroundColor: "#e5e7eb",
          height: 12,
          width: "40%",
          borderRadius: 4,
        }}
      />
    </div>
  );
}
