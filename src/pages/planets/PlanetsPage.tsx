import React, { useCallback, useEffect } from 'react';
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel
} from 'devextreme-react/data-grid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getAllPlanets,
  selectPlanets
} from '../../features/planets/planetsSlice';
import LoadPanel from 'devextreme-react/load-panel';
import './planets.scss';
import { Error } from '../../components';
import { RowDblClickEvent } from 'devextreme/ui/data_grid';
import { useNavigate } from 'react-router';

const pageSizes = [5, 10, 15];

export const PlanetsPage = () => {
  const { status, planetsData } = useAppSelector(selectPlanets);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPlanets());
  }, [dispatch]);

  const handleRowDblClick = useCallback(
    ({ data }: RowDblClickEvent<any, any>) => {
      navigate(`/planets/${data.url.slice(data.url.length - 2)}`);
    },
    []
  );

  return (
    <React.Fragment>
      <h2 className={'title'}>Planets</h2>

      {status === 'loading' && <LoadPanel visible={true} />}
      {status === 'failed' && <Error />}

      {status === 'success' && (
        <DataGrid
          dataSource={planetsData}
          allowColumnReordering={true}
          rowAlternationEnabled={true}
          showBorders={true}
          onRowDblClick={handleRowDblClick}
        >
          <GroupPanel visible={true} />
          <SearchPanel visible={true} highlightCaseSensitive={true} />
          <Grouping autoExpandAll={false} />

          <Column dataField='climate' caption='Climate' groupIndex={0} />
          <Column dataField='name' caption='Name' dataType='string' />
          <Column
            dataField='rotation_period'
            caption='Rotation period'
            dataType='number'
            alignment={'left'}
          />
          <Column
            dataField='orbital_period'
            caption='Orbital period'
            dataType='number'
            alignment={'left'}
          />
          <Column
            dataField='diameter'
            caption='Diameter'
            dataType='number'
            alignment={'left'}
          />
          <Column
            dataField='gravity'
            caption='Gravity'
            dataType='number'
            alignment={'left'}
          />
          <Column
            dataField='terrain'
            caption='Terrain'
            dataType='string'
            alignment={'left'}
          />
          <Column
            dataField='surface_water'
            caption='Surface water'
            dataType='number'
            alignment={'left'}
          />
          <Column
            dataField='population'
            caption='Population '
            dataType='number'
            alignment={'left'}
          />

          <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
          <Paging defaultPageSize={5} />
        </DataGrid>
      )}
    </React.Fragment>
  );
};
