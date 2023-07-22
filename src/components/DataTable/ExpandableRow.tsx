import { ExpandableData } from "../.."

/**
 * Component for rendering an expandable row.
 */
const ExpandableRowComponent = ({ data }: ExpandableData): JSX.Element =>
    <div className="dataTable--rowData">
        <div className="rowData rowData--date">
            <p><span>Birth Date:</span>{data.birth_date.split('T')[0]}</p>
            <p><span>Starting Date:</span>{data.start_date.split('T')[0]}</p>
        </div>
        <div className="rowData rowData--address">
            <p><span>Address:</span>{data.adress_street}, {data.adress_city} {data.adress_state} {data.adress_zip}
            </p>
        </div>
    </div>

export default ExpandableRowComponent