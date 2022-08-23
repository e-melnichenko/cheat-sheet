import {defineEventHandler} from "h3";

export default defineEventHandler((event) => list);

export interface CheatSheetListItem {
    id: number,
    name: string,
    description?: string,
    lang: string,
    createdAt: string,
    editedAt: string,
}

const list: CheatSheetListItem[] = [
    {
        "id": 1,
        "name": "name",
        "description": "desc",
        "lang": "lang",
        "createdAt": "2022-08-22T06:49:42.540Z",
        "editedAt": "2022-08-23T07:49:42.540Z"
    },
    {
        "id": 2,
        "name": "name 2",
        "description": "desc 2",
        "lang": "lang2",
        "createdAt": "2022-08-22T06:49:42.540Z",
        "editedAt": "2022-08-23T07:49:42.540Z"
    }
]
