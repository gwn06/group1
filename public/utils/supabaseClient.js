import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tnymzpctziprndvppkts.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDI2Njc5NywiZXhwIjoxOTQ5ODQyNzk3fQ.9MJ7t9r-D_h_FkXzZJ-4jiwaAw4URSdYJvccfX9Mljk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
