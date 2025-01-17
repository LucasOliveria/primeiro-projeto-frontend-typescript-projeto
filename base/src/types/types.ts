import { Dispatch, SetStateAction } from "react"

export type Teacher = {
  id: number,
  name: string,
  avatar: string,
  stack: string,
  bio: string
}

/* Não está sendo usado*/
export type StateTeachers = {
  teachers: Teacher[]
  setTeachers: Dispatch<SetStateAction<Teacher[]>>
}