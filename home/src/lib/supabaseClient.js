
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tabtzwtkkftvldpvnqqg.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhYnR6d3Rra2Z0dmxkcHZucXFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MTU2NDEsImV4cCI6MjA1NjM5MTY0MX0.mZajvwX3PycVQi0V3L948BsH7PZ8a2_t00cRcKbrQJ8
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }