import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RowDblClickEvent } from 'devextreme/ui/data_grid';
import LoadPanel from 'devextreme-react/load-panel';
import { DataGridComponent, Error } from '../../components';
import { GridDataType } from '../../types/contentType';
import { getAllCreatures, selectCreatures } from '../../features/creatures/creaturesSlice';
import { useNavigate } from 'react-router';

export const CreaturesPage = () => {
  const { status, creaturesData } = useAppSelector(selectCreatures);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCreatures());
  }, [dispatch]);


  const handleRowDblClick = useCallback(
    ({ data }: RowDblClickEvent) => {
      const url = data.url.split('/');
      navigate(`/creatures/${url[url.length - 2]}`);
    },
    []
  );

  return (
    <React.Fragment>
      <h2 className={'title'}>Creatures</h2>

      {status === 'loading' && <LoadPanel visible={true} />}
      {status === 'failed' && <Error />}

      {status === 'success' && creaturesData && (
        <DataGridComponent
          dataType={GridDataType.CreaturesData}
          data={creaturesData}
          handleRowDblClick={handleRowDblClick}
        />
      )}
    </React.Fragment>
  );
};

