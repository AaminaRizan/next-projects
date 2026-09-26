"use server";
import { redirect } from "next/navigation";
export async function requestSession(formData:FormData){
  const name=String(formData.get("name")??"").trim();
  const email=String(formData.get("email")??"").trim();
  const goal=String(formData.get("goal")??"").trim();
  if(name.length<2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !goal) redirect("/book?error=1");
  // Portfolio demonstration: no personal data is stored or sent.
  redirect("/book/thanks");
}
