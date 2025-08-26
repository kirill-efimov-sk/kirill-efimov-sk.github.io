export type Coords = {
  x: number;
  y: number;
};

export type EffectorElementData = {
  id: string;
  elem: React.ReactNode;
  coords: Coords;
};
