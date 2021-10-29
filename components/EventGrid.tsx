import type { NextPage } from 'next';
import { AgGridColumn, AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import eventI from '../types/event';


interface props {
    events : eventI[]
}


const EventGrid : NextPage<props> = ({events}) => {
    
   const rowStyle = { background: '#ffffff' };
   
   return (
    <div className="ag-theme-alpine">
            <AgGridReact
                rowData={events}
                rowStyle={rowStyle}
                modules={[ClientSideRowModelModule]}
                    defaultColDef={{
                        flex: 1,
                        resizable:true
                    }}
                domLayout={'autoHeight'}
                suppressRowHoverHighlight={true}
                >
                <AgGridColumn field="datetime"></AgGridColumn>
                <AgGridColumn field="value" ></AgGridColumn>
                <AgGridColumn field="id" ></AgGridColumn>
            </AgGridReact>
    </div>
   )
}

export default EventGrid;