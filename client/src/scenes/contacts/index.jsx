import { GridToolbar } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { kDataContacts } from "../../data/khanhdata";


const Contacts =() => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const columns =[
        {
            field: "id",
            nameHeader: "ID",
            flex: 0.5
        },
        {
            field: "name",
            nameHeader: "Name",
            flex: 1,
            align:"left",  
        },
        {
            field: "email",
            nameHeader: "Email",
            flex: 1,
            align:"left",  
        },
        {
            field: "phone",
            nameHeader: "Phone",
            flex: 1,
            align:"left",  
        },
        {
            field: "address",
            nameHeader: "Address",
            flex: 1,
            align:"left",  
        },
        {
            field: "city",
            nameHeader: "City",
            flex: 1,
            align:"left",  
        },
        {
            field: "zipCode",
            nameHeader: "ZipCode",
            flex: 1,
            align:"left",  
        },
        {
            field: "registrarId",
            nameHeader: "RegistrarId",
            type: "Number",
            flex: 1,
            align:"left",  
        }
        ]
    return  (
        <Box m="20px">
            <header title="Contacts" subtitle="--------------------------" />
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
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text":
                    {color: `${colors.grey[100]} !important`},
                  }}
              >
                <DataGrid 
                rows={kDataContacts} 
                columns ={columns} 
                components = {{Toolbar: GridToolbar}}
                /> 

            </Box>
        </Box>
    )
}
export default Contacts;