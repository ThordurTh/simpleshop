export async function insertOrder(payload) {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud2d0bXRwZGl4a29ra3l1b3R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2MDA0OTcsImV4cCI6MTk4MjE3NjQ5N30.Fl6MzyGuGLY3QpkDCgLKVIBY8aiR7eFuIiIHaYNv3ao";
  const url = "https://gnwgtmtpdixkokkyuotu.supabase.co";
  const res = await fetch(url + "/rest/v1/simpleshop", {
    method: "POST",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud2d0bXRwZGl4a29ra3l1b3R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2MDA0OTcsImV4cCI6MTk4MjE3NjQ5N30.Fl6MzyGuGLY3QpkDCgLKVIBY8aiR7eFuIiIHaYNv3ao",
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud2d0bXRwZGl4a29ra3l1b3R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2MDA0OTcsImV4cCI6MTk4MjE3NjQ5N30.Fl6MzyGuGLY3QpkDCgLKVIBY8aiR7eFuIiIHaYNv3ao",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
}
