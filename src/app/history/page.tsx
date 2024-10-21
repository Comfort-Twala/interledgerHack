import Header from "../header/header"
import { DataTable } from "./components/data-table"
import { HistoryRecord, columns } from "./components/columns"

export default function History() {
  const data: HistoryRecord[] = [
    { id: 1, name: 'Joe Khoza', reference: 'INV-1001', date: new Date('2023-09-12'), amount: 150.75 },
    { id: 2, name: 'Jane Smith', reference: 'INV-1002', date: new Date('2023-09-15'), amount: 245.00 },
    { id: 3, name: 'Alex Johnson', reference: 'INV-1003', date: new Date('2023-09-18'), amount: 320.50 },
    { id: 4, name: 'Chris Lee', reference: 'INV-1004', date: new Date('2023-09-20'), amount: 500.25 },
    { id: 5, name: 'Emily Davis', reference: 'INV-1005', date: new Date('2023-09-22'), amount: 99.99 },
    { id: 6, name: 'Sam Walker', reference: 'INV-1006', date: new Date('2023-09-25'), amount: 180.00 },
    { id: 7, name: 'Laura Taylor', reference: 'INV-1007', date: new Date('2023-09-26'), amount: 270.50 },
    { id: 8, name: 'Mike Brown', reference: 'INV-1008', date: new Date('2023-09-27'), amount: 330.80 },
    { id: 9, name: 'Sara Wilson', reference: 'INV-1009', date: new Date('2023-09-28'), amount: 400.40 },
    { id: 10, name: 'Chris Green', reference: 'INV-1010', date: new Date('2023-09-29'), amount: 215.90 },
    { id: 11, name: 'David Moore', reference: 'INV-1011', date: new Date('2023-09-30'), amount: 134.60 },
    { id: 12, name: 'Angela Adams', reference: 'INV-1012', date: new Date('2023-10-01'), amount: 480.10 },
    { id: 13, name: 'Tom White', reference: 'INV-1013', date: new Date('2023-10-02'), amount: 299.99 },
    { id: 14, name: 'Lucy King', reference: 'INV-1014', date: new Date('2023-10-03'), amount: 350.75 },
    { id: 15, name: 'Henry Scott', reference: 'INV-1015', date: new Date('2023-10-04'), amount: 190.20 },  
  ]

  return (
    <>
      <div className="flex-col md:flex">
        <Header />
        <div className="flex-1 space-y-4 p-10 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Transaction History</h2>
          </div>
          {/* <h3 className="text-2xl text-muted-foreground tracking-tight">Hello</h3> */}
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  )
}