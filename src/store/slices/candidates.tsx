import { createSelector } from '@reduxjs/toolkit'
import { candidatesApi } from '@api/candidates'
import type { RootState } from '@store/index'

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

export const selectCandidatesResult = candidatesApi.endpoints.getCandidatesList.select('');

const emptyList = [] = [];

export const selectAllCandidates = createSelector(
  selectCandidatesResult,
  list => list?.data ?? emptyList
);

const containsName = (c:Candidate, value: string) => c.name.toLowerCase().includes(value.toLowerCase())
const containsPosition = (c:Candidate, value: string) => c.position_applied.toLowerCase().includes(value.toLowerCase())

export const selectCandidatesByNameOrPosition = createSelector(
  selectAllCandidates,
  (_state: RootState, value:string) => value,
  (allCandidates:Array<Candidate>, value: string) => allCandidates.filter((c:Candidate) => containsName(c, value) || containsPosition(c, value))
)