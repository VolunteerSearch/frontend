"use server"


export async function signIn(formData: FormData) {
  await fetch("http://auth-service:3002/auth/sign-in",
  {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
    headers: {"Content-Type": "application/json"},
  });
}