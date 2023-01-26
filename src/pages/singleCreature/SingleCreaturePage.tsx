import React, { useEffect, useState } from 'react';
import Form, { SimpleItem, GroupItem } from 'devextreme-react/form';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectPlanets } from '../../features/planets/planetsSlice';
import LoadPanel from 'devextreme-react/load-panel';
import { Error } from '../../components';
import { useLocation } from 'react-router-dom';
import { colorEyes } from '../../data';
import { getSingleCreature } from '../../features/creatures/creaturesSlice';
import { getAvatarRender } from '../../utils/getAvatar';
import '../pages.scss';

export const SingleCreaturePage = () => {
  const { status, planet } = useAppSelector(selectPlanets);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const [colorEyesOptions] = useState<{ items: string[] }>({
    items: colorEyes
  });

  useEffect(() => {
    dispatch(getSingleCreature(`${pathname.split('/')[2]}`));
  }, [dispatch]);

  return (
    <React.Fragment>
      <h2 className={'title'}>Single Creature</h2>

      {status === 'loading' && <LoadPanel visible={true} />}
      {status === 'failed' && <Error />}

      {status === 'success' && (
        <div className={'dx-card responsive-paddings'}>
          <Form formData={planet}>
            <GroupItem cssClass='first-group' colCount={4}>
              <SimpleItem
                render={() =>
                  getAvatarRender(
                    'https://upload.wikimedia.org/wikipedia/ru/thumb/9/96/CGIYoda.jpg/200px-CGIYoda.jpg'
                  )
                }
              />
              <GroupItem colSpan={3}>
                <SimpleItem dataField='name' />
                <SimpleItem dataField='height' />
                <SimpleItem dataField='birth_year' />
              </GroupItem>
            </GroupItem>
            <GroupItem cssClass='second-group' colCount={2}>
              <GroupItem>
                <SimpleItem dataField='mass' />
                <SimpleItem dataField='hair_color' />
                <SimpleItem
                  dataField='eye_color'
                  editorType='dxSelectBox'
                  editorOptions={colorEyesOptions}
                />
              </GroupItem>
              <GroupItem>
                <SimpleItem dataField='skin_color' />
                <SimpleItem dataField='gender' />
                <SimpleItem dataField='homeworld' />
              </GroupItem>
            </GroupItem>
          </Form>
        </div>
      )}
    </React.Fragment>
  );
};
