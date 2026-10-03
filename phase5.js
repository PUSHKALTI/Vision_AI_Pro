// Vision-AI-Pro Phase 5
// Supabase connection

const VAP_SUPABASE_URL ="https://swyvrgpapuralxngfoxd.supabase.co";

const VAP_SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_3BE4yCQ_mcVmKDGIvG4mNQ_EtL_7J";
window VAP_SB = supabase.createClient(
  VAP_SUPABASE_URL,
  VAP_SUPABASE_PUBLISHABLE_KEY
);
