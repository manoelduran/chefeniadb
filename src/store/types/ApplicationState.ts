import { MvpsState } from "../modules/mvps/types";
import { SpecificMvpsState } from "../modules/specificMvps/types";

interface ApplicationState {
  mvps: MvpsState;
  specificMvps: SpecificMvpsState;
}

export default ApplicationState;
