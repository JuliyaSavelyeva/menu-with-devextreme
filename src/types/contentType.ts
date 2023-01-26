import { RowDblClickEvent } from 'devextreme/ui/data_grid';

export type PlanetType = {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}

export type CreaturesType = {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
}

export type gridColumnType = {
  dataField: string,
  caption: string,
  dataType: string,
  groupIndex: number,
}

export enum GridDataType {
  PlanetsData = 'planets',
  CreaturesData = 'creatures',
}

export type DataGridComponentType = {
  dataType: GridDataType,
  data: [CreaturesType | PlanetType],
  handleRowDblClick: (e: RowDblClickEvent<any, any>) => void;
}
