import { createClient } from "@supabase/supabase-js";
import {REACT_APP_SUPABASE_ANON_KEY} from "@env"
const supabaseUrl="https://xdwneysisbfqclmzujrf.supabase.co"
const supabaseAnonKey = REACT_APP_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;