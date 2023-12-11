import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lqthegogqzvwfaqjavek.supabase.co";

const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxdGhlZ29ncXp2d2ZhcWphdmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyNzUzODMsImV4cCI6MjAxNzg1MTM4M30.cVpDx9bdKvh7EbDh3LW3ZOLGJJqfvuv9c0TtYBRCbkc";

export const supabase = createClient(supabaseUrl, supabaseKey);
