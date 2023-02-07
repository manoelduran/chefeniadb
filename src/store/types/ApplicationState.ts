import { MvpsState } from "../modules/mvps/types";
import { RoomsState } from "../modules/rooms/types";
import { UserState } from "../modules/user/types";

interface ApplicationState {
  mvps: MvpsState;
  rooms: RoomsState;
  user: UserState;
}

export default ApplicationState;
