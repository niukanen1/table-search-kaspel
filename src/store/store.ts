import { create } from "zustand";
import { TableData } from "../types/tableData";

type State = { 
    tableData: TableData[]
}

type Actions = { 
    addRow: (newRow: TableData) => void
    deleteRowByKey: (key: string) => void 
    editRow: (updatedRow: TableData) => void
}
const useTableStore = create<State & Actions>((set) => ({
    tableData: [], 
    addRow(newRow: TableData) {
        set(state => ({
            tableData: [...state.tableData, newRow]
        }))
    },
    deleteRowByKey(key: string) {
        set(state => ({ 
            tableData: state.tableData.filter(row => row.key != key)
        }))
    },
    editRow(updatedRow: TableData) { 
        set(state => {
            const tableDataCopy = [...state.tableData];
            const rowToUpdateIndex = tableDataCopy.findIndex(row => row.key == updatedRow.key);
            tableDataCopy[rowToUpdateIndex] = updatedRow;
            return { 
                tableData: tableDataCopy
            }
        })
    }
}))

export default useTableStore