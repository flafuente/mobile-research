export type Candidate = {
  id: number
  application_date: string
  birth_date: string
  email: string
  name: string
  position_applied: string
  status: 'waiting' | 'rejected' | 'approved'
  year_of_experience: number
}