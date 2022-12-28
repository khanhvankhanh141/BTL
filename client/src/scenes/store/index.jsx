import { Box,useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { khanhData } from "../../data/khanhdata";
import Header from "../../components/Header";

const Store =() => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const columns =[
        {
            field: "id",
            headerName:"ID"
        },
        {
            field: "nameStore",
            headerName:"Store",
            flex: 1
        },
        {
            field: "address",
            headerName: "Address",
            align: "left",
            flex: 1
        },
        {
            field: "phone",
            headerName:"Phone",
            type: "Number",
            align: "left",
            flex: 1
        },
        {
            field: "owner",
            headerName:"OwnerStore",
            align: "left",
            flex: 1
        }
        ]
    return  (
        <Box m="20px">
            <Header title="STORE" subtitle="--------------------------" />
            <Box m="40px 0 0 0" height="75vh"
              sx={{
                    "& .MuiDataGrid-root": {
                      border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                      borderBottom: "none",
                    },
                    "& .name-column--cell": {
                      color: colors.red[500],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: colors.indigo[700] ,
                      borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                      backgroundColor: colors.black[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                      borderTop: "none",
                      backgroundColor: colors.indigo[700],
                    }
                  }}
              >
                <DataGrid 
                rows={khanhData} 
                columns ={columns} 
                /> 

            </Box>
        </Box>
    )
}
export default Store;