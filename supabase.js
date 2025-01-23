import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://vtveeqitpcaprzvbfyjp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0dmVlcWl0cGNhcHJ6dmJmeWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2MTQ4MjksImV4cCI6MjA1MzE5MDgyOX0.uVVfQbOomgjM5aHdcbHbKl8uRpU9JRwj7Oa1vFfWpSY'
)

export default supabase
