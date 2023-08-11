import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://jwovnlvoljxhcxlvdalt.supabase.co'

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3b3ZubHZvbGp4aGN4bHZkYWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3MjE2MjIsImV4cCI6MjAwNzI5NzYyMn0.Kyk9xU1Su9yt0EnGuAXO2oJrT5l9o2IQka8yDUlQ_KM"

const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase