import { NameSpace } from '../../const';
import { Places } from '../../types/place';
import { State } from '../../types/state';

export const getPlacesList = (state: State): Places => state[NameSpace.Booking].placesList;

export const getPlacesListCompletingStatus = (state: State): boolean => state[NameSpace.Booking].isPlacesListCompleting;
