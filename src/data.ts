import { gridColumnType } from './types/contentType';

export const climate = ['arid', 'frozen', 'murky', 'temperate', 'tropical'];
export const colorEyes = ['blue', 'blue-gray', 'brown', 'red', 'yellow'];

export const gridPlanetsData: gridColumnType[] = [
  {
    dataField: 'climate',
    caption: 'Climate',
    dataType: 'string',
    groupIndex: 0
  },
  { dataField: 'name', caption: 'Name', dataType: 'string', groupIndex: -1 },
  {
    dataField: 'rotation_period',
    caption: 'Rotation period',
    dataType: 'number',
    groupIndex: -1
  },
  {
    dataField: 'orbital_period',
    caption: 'Orbital period',
    dataType: 'number',
    groupIndex: -1
  },
  {
    dataField: 'diameter',
    caption: 'Diameter',
    dataType: 'number',
    groupIndex: -1
  },
  {
    dataField: 'gravity',
    caption: 'Gravity',
    dataType: 'number',
    groupIndex: -1
  },
  {
    dataField: 'terrain',
    caption: 'Terrain',
    dataType: 'string',
    groupIndex: -1
  },
  {
    dataField: 'surface_water',
    caption: 'Surface water',
    dataType: 'number',
    groupIndex: -1
  },
  {
    dataField: 'population',
    caption: 'Population',
    dataType: 'number',
    groupIndex: -1
  }
];

export const gridCreaturesData: gridColumnType[] = [
  {
    dataField: 'eye_color',
    caption: 'Eye color',
    dataType: 'string',
    groupIndex: 0
  },
  { dataField: 'name', caption: 'Name', dataType: 'string', groupIndex: -1 },
  {
    dataField: 'height',
    caption: 'Height',
    dataType: 'number',
    groupIndex: -1
  },
  {
    dataField: 'mass',
    caption: 'Mass',
    dataType: 'string',
    groupIndex: -1
  },
  {
    dataField: 'hair_color',
    caption: 'Hair color',
    dataType: 'string',
    groupIndex: -1
  },
  {
    dataField: 'skin_color ',
    caption: 'Skin color',
    dataType: 'string',
    groupIndex: -1
  },
  {
    dataField: 'birth_year',
    caption: 'Birth year',
    dataType: 'date',
    groupIndex: -1
  },
  {
    dataField: 'gender',
    caption: 'Gender',
    dataType: 'string',
    groupIndex: -1
  },
  {
    dataField: 'homeworld',
    caption: 'Homeworld',
    dataType: 'string',
    groupIndex: -1
  }
];
