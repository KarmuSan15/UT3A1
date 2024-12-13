//& Informe devaluacion examen recuperacion ut3

import React from "react";
import MaterialTable, { Column } from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

interface IDevaluation {
  articulo: string;
  meses: number;
  devaluacion: number;
}

const InformeDevaluacion: React.FC<{ data: IDevaluation[] }> = ({ data }) => {
  const columns: Array<Column<IDevaluation>> = [
    { title: "Artículo", field: "articulo", filterPlaceholder: "Buscar artículo..." }, // Filtro activado en Artículo
    { title: "Meses", field: "meses", type: "numeric", filtering: false }, // Deshabilitar filtro en Meses
    { title: "Devaluación (%)", field: "devaluacion", type: "numeric", filtering: false }, // Deshabilitar filtro en Devaluación
  ];

  return (
    <div style={{ maxWidth: "100%", marginTop: "20px" }}>
      <MaterialTable
        title="Informe de Devaluación"
        columns={columns}
        data={data}
        options={{
          filtering: true, // Activamos el filtrado en Artículo
          columnsButton: true,
          draggable: true,
          paging: true,
          exportMenu: [
            {
              label: "Exportar a PDF",
              exportFunc: (cols, rows) => ExportPdf(cols, rows, "Informe_Devaluacion"),
            },
            {
              label: "Exportar a CSV",
              exportFunc: (cols, rows) => ExportCsv(cols, rows, "Informe_Devaluacion"),
            },
          ],
          headerStyle: {
            backgroundColor: "#1976d2",
            color: "#FFFFFF",
            fontWeight: "bold",
          },
          rowStyle: (_, index) => ({
            backgroundColor: index % 2 === 0 ? "#f7f7f7" : "#ffffff",
          }),
          searchFieldStyle: {
            borderRadius: "25px",
            padding: "5px 15px",
            fontSize: "16px",
          },
          pageSize: 5,
          pageSizeOptions: [5, 10, 20],
        }}
        localization={{
          toolbar: {
            searchPlaceholder: "Buscar artículo...",
            exportTitle: "Exportar",
          },
          pagination: {
            labelDisplayedRows: "{from}-{to} de {count}",
            firstTooltip: "Primera página",
            previousTooltip: "Página anterior",
            nextTooltip: "Página siguiente",
            lastTooltip: "Última página",
          },
          header: {
            actions: "Acciones",
          },
        }}
      />
    </div>
  );
};

export default InformeDevaluacion;
