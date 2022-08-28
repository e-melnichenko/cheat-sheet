import {defineEventHandler} from "h3";

export default defineEventHandler((event): CheatSheetItemType => {
  console.log('cheat-sheet card id', event.context.params.id);

  return card
});

export interface CheatSheetItemType {
  id: number,
  name: string,
  description?: string,
  lang: string,
  createdAt: string,
  editedAt: string,
  code: string
}

const card: CheatSheetItemType = {
  "id": 1,
  "name": "name",
  "description": "desc",
  "lang": "lang",
  "createdAt": "2022-08-22T06:49:42.540Z",
  "editedAt": "2022-08-23T07:49:42.540Z",
  "code": "console.log('hello world');"
}
