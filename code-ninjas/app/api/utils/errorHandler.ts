export async function handleUserNotFound() {
  return new Response(JSON.stringify("User not found"), {
    status: 404,
  });
}
