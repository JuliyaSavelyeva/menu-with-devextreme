import React, { useEffect, useState } from 'react';
import Form, { SimpleItem, GroupItem, Label } from 'devextreme-react/form';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getSinglePlanet,
  selectPlanets
} from '../../features/planets/planetsSlice';
import LoadPanel from 'devextreme-react/load-panel';
import { Error } from '../../components';
import { useLocation } from 'react-router-dom';
import { climate } from '../../data';
import { getAvatarRender } from '../../utils/getAvatar';
import '../pages.scss';

export const SinglePlanetPage = () => {
  const { status, planet } = useAppSelector(selectPlanets);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const [climateOptions] = useState<{ items: string[] }>({
    items: climate
  });

  useEffect(() => {
    dispatch(getSinglePlanet(`${pathname.split('/')[2]}`));
  }, [dispatch]);

  return (
    <React.Fragment>
      <h2 className={'title'}>Single Planet</h2>

      {status === 'loading' && <LoadPanel visible={true} />}
      {status === 'failed' && <Error />}

      {status === 'success' && (
        <div className={'dx-card responsive-paddings'}>
          <Form formData={planet}>
            <GroupItem cssClass='first-group' colCount={4}>
              <SimpleItem
                render={() =>
                  getAvatarRender(
                    'https://naked-science.ru/wp-content/uploads/2018/04/field_image_maxresdefault_119.jpg'
                  )
                }
              />
              <GroupItem colSpan={3}>
                <SimpleItem dataField='name' />
                <SimpleItem dataField='rotation_period' />
                <SimpleItem dataField='orbital_period' />
              </GroupItem>
            </GroupItem>
            <GroupItem cssClass='second-group' colCount={2}>
              <GroupItem>
                <SimpleItem dataField='diameter' />
                <SimpleItem dataField='gravity' />
                <SimpleItem
                  dataField='climate'
                  editorType='dxSelectBox'
                  editorOptions={climateOptions}
                />
              </GroupItem>
              <GroupItem>
                <SimpleItem dataField='terrain' />
                <SimpleItem dataField='surface_water' />
                <SimpleItem dataField='population'>
                  <Label text='Phone' />
                </SimpleItem>
              </GroupItem>
            </GroupItem>
          </Form>
        </div>
      )}
    </React.Fragment>
  );
};
