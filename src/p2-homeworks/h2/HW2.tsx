import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css';

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType = {
    _id: number,
    name: string,
    priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'Ronaldo', priority: 'high'},
    {_id: 2, name: 'De Gea', priority: 'low'},
    {_id: 3, name: 'Show', priority: 'low'},
    {_id: 4, name: 'Pogba', priority: 'high'},
    {_id: 5, name: 'Rashford', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    else return affairs.filter(a => a.priority === filter) // need to fix
}
export const deleteAffair = (affairs: any, _id: any): any => { // need to fix any
    return // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: any) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <div className={s.hw2}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2