import { FilterMvpState } from "../modules/filterMvp/types";
import { MvpState } from "../modules/mvp/types";
import { MvpsState } from "../modules/mvps/types";
import { RoomsState } from "../modules/rooms/types";
import { SpecificMvpsState } from "../modules/specificMvps/types";

interface ApplicationState {
  mvps: MvpsState;
  rooms: RoomsState;
 // specificMvps: SpecificMvpsState;
  mvp: MvpState;
 // filterMvp: FilterMvpState;
}

export default ApplicationState;
