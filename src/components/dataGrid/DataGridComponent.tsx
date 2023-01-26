import {
  Column,
  DataGrid,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel
} from 'devextreme-react/data-grid';
import { gridCreaturesData, gridPlanetsData } from '../../data';
import {
  DataGridComponentType,
  gridColumnType,
  GridDataType
} from '../../types/contentType';
import React, { useMemo } from 'react';
import './data-grid.scss';

const pageSizes = [5, 10, 15];

export const DataGridComponent = ({
  handleRowDblClick,
  data,
  dataType
}: DataGridComponentType) => {
  const columnData = useMemo(
    () =>
      dataType === GridDataType.PlanetsData
        ? gridPlanetsData
        : gridCreaturesData,
    [data]
  );

  return (
    <DataGrid
      dataSource={data}
      allowColumnReordering={true}
      rowAlternationEnabled={true}
      showBorders={true}
      onRowDblClick={handleRowDblClick}
    >
      <GroupPanel visible={true} />
      <SearchPanel visible={true} highlightCaseSensitive={true} />
      <Grouping autoExpandAll={false} />

      {columnData.map(
        ({ dataField, dataType, groupIndex, caption }: gridColumnType) => {
          return (
            <Column
              key={caption}
              dataField={dataField}
              caption={caption}
              groupIndex={groupIndex}
              dataType={dataType}
              alignment={'left'}
            />
          );
        }
      )}

      <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
      <Paging defaultPageSize={5} />
    </DataGrid>
  );
};
