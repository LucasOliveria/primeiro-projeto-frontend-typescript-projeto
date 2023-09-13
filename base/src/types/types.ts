import { Dispatch, SetStateAction } from "react"

export type Teacher = {
  id: number,
  name: string,
  avatar: string,
  stack: string,
  bio: string
}

export type StateTeachers = {
  teachers: Teacher[]
  setTeachers: Dispatch<SetStateAction<Teacher[]>>
}

export type JustOneTeacher = {
  teacher: Omit<StateTeachers, 'setTeachers'>
}