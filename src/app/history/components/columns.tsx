'use client'

import { ColumnDef } from "@tanstack/react-table"

export type HistoryRecord = {
    id: number
    name: string,
    reference: string,
    date: Date,
    amount: number    
}

export const columns: ColumnDef<HistoryRecord>[] = [
    {
        header: "Name",
        accessorKey: "name",
        cell: ({ getValue }) => getValue<string>(), 
    },
    {
        header: "Reference",
        accessorKey: "reference",
        cell: ({ getValue }) => getValue<string>(), 
    },
    {
        header: "Date",
        accessorKey: "date",
        cell: ({ getValue }) => {
            const date = getValue<Date>();
            return date.toLocaleDateString(); 
        },
    },
    {
        header: "Amount",
        accessorKey: "amount",
        cell: ({ getValue }) => {
            const amount = getValue<number>();
            return amount.toLocaleString(undefined, { style: 'currency', currency: 'ZAR' }); 
        },
    },
]
