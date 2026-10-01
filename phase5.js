// Vision-AI-Pro Phase 5
// Supabase connection used by Login.html

const VAP_SUPABASE_URL = "https://swyvrgpapuralxngfoxd.supabase.co";

const VAP_SUPABASE_PUBLISHABLE_KEY = "PASTE_YOUR_EXISTING_SUPABASE_PUBLISHABLE_KEY_HERE";

window.VAP_SB = supabase.createClient(
  VAP_SUPABASE_URL,
  VAP_SUPABASE_PUBLISHABLE_KEY
);
