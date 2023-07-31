import { ColumnsType } from "antd/es/table"
import {Table} from 'antd'
import { AnyObject } from "antd/es/_util/type"
import useTableStore from "../../store/store"


const columns: ColumnsType<AnyObject> = [ 
    { 
        title: "Имя",
        dataIndex: "name",
        key: "name"
    }, 
    { 
        title: "Дата", 
        dataIndex: "date", 
        key: "date"
    }, 
    { 
        title: "Количество",
        dataIndex: 'amount',
        key: "amount"
    }, 
    {
        title: "Действия", 
        key: "actions"
    }
]

export default function TableView() { 
    const tableData = useTableStore(state => state.tableData); 
    return ( 
        <div>
            <Table columns={columns} dataSource={tableData} />
        </div>
    )
}