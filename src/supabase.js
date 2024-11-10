import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gjfgjsukwjqssolnglhi.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqZmdqc3Vrd2pxc3NvbG5nbGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwNTI0MzUsImV4cCI6MjA0NDYyODQzNX0.1-02jzT_QH8Hnot7946QIS4VC5iK3OUr64iQLa2na4g";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Sign up function
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
}
// Login function
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}
// Logout function
export async function logout() {
  const { error } = await supabase.auth.signOut();
  return { error };
}
