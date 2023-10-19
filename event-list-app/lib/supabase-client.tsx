import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/supabase'

const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabase_api_key = process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string

const supabase = createClient<Database>(
supabase_url, supabase_api_key
)

export default supabase