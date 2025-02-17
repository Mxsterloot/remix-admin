import { DataGrid, GridColDef, GridPaginationModel, GridRowSelectionModel } from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface SSRTableProps {
    // Data props
    rows: Array<Record<string, unknown>>;
    columns: GridColDef[];
    rowCount?: number;
    
    // Pagination props
    paginationModel?: GridPaginationModel;
    onPaginationModelChange?: (model: GridPaginationModel) => void;
    
    // Selection props
    checkboxSelection?: boolean;
    onRowSelectionModelChange?: (selectionModel: GridRowSelectionModel) => void;
    selectionModel?: GridRowSelectionModel;
    
    // UI state
    loading?: boolean;
}

export default function SSRTable({
    rows,
    columns,
    paginationModel = { page: 0, pageSize: 10 },
    onPaginationModelChange,
    loading = false,
    rowCount,
    checkboxSelection = false,
    onRowSelectionModelChange,
    selectionModel,
}: SSRTableProps) {
    // Example of how to handle pagination changes
    const handlePaginationChange = (model: GridPaginationModel) => {
        // Call parent handler
        onPaginationModelChange?.(model);

        // Example API call structure:
        // fetchData({
        //     page: model.page,
        //     pageSize: model.pageSize,
        //     // Add any other params like sorting, filtering etc
        // });
    };

    // Example of how to handle selection changes
    const handleSelectionChange = (newSelectionModel: GridRowSelectionModel) => {
        // Call parent handler
        onRowSelectionModelChange?.(newSelectionModel);

        // Example of getting selected row data:
        // const selectedRows = rows.filter(row => 
        //     newSelectionModel.includes(row.id as number)
        // );
    };

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <DataGrid
                // Data props
                rows={rows}
                columns={columns}
                rowCount={rowCount}
                
                // Pagination configuration
                paginationModel={paginationModel}
                onPaginationModelChange={handlePaginationChange}
                pageSizeOptions={[10, 25, 50, 100]}
                paginationMode="server"
                
                // Selection configuration
                checkboxSelection={checkboxSelection}
                onRowSelectionModelChange={handleSelectionChange}
                rowSelectionModel={selectionModel}
                
                // UI state
                loading={loading}
                
                sx={{
                    border: 0,
                    '& .MuiDataGrid-cell:focus': {
                        outline: 'none'
                    },
                    '& .MuiDataGrid-columnHeader:focus': {
                        outline: 'none' 
                    }
                }}
            />
        </Box>
    );
}