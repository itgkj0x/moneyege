import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URLまたはAnonKeyが設定されていません。.env.localを確認してください。')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
