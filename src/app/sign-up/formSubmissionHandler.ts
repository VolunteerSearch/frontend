"use server"


export async function createUser(formData: FormData) {
  await fetch("http://auth-service:3002/auth/sign-up",
  {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
      username: formData.get("username")
    }),
    headers: {"Content-Type": "application/json"},
  });
} 