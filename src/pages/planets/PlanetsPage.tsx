import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getAllPlanets,
  selectPlanets
} from '../../features/planets/planetsSlice';
import LoadPanel from 'devextreme-react/load-panel';
import { DataGridComponent, Error } from '../../components';
import { RowDblClickEvent } from 'devextreme/ui/data_grid';
import { useNavigate } from 'react-router';
import { GridDataType } from '../../types/contentType';

export const PlanetsPage = () => {
  const { status, planetsData } = useAppSelector(selectPlanets);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPlanets());
  }, [dispatch]);

  const handleRowDblClick = useCallback(
    ({ data }: RowDblClickEvent) => {
      const url = data.url.split('/');
      navigate(`/planets/${url[url.length - 2]}`);
    },
    []
  );

  return (
    <React.Fragment>
      <h2 className={'title'}>Planets</h2>

      {status === 'loading' && <LoadPanel visible={true} />}
      {status === 'failed' && <Error />}

      {status === 'success' && planetsData && (
        <DataGridComponent
          dataType={GridDataType.PlanetsData}
          data={planetsData}
          handleRowDblClick={handleRowDblClick}
        />
      )}
    </React.Fragment>
  );
};
