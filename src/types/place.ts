export type Location = {
  address: string;
  coords: [number, number];
}

export type Slot = {
  time: string;
  isAvailable: boolean;
}

export type Slots = Slot[];

export type Place = {
  id: string;
  location: Location;
  slots: {
    today: Slots;
    tomorrow: Slots;
  };
}

export type Places = Place[];
