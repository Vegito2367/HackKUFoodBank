import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xdwneysisbfqclmzujrf.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhkd25leXNpc2JmcWNsbXp1anJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5Nzg2NjYsImV4cCI6MjAyODU1NDY2Nn0.dxDN6LScPwpnzOgXzR0VN3yb9Mva_ZLZpCxSwfBt7nw"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})