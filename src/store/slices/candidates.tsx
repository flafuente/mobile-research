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

export const selectCandidateByName = createSelector(
  selectAllCandidates,
  (_state: RootState, name:string) => name,
  (allCandidates:Array<Candidate>, name: string) => allCandidates.filter((c:Candidate) => c.name.toLowerCase().includes(name.toLowerCase()))
)