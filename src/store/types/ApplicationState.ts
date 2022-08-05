import { FilterMvpState } from "../modules/filterMvp/types";
import { MvpState } from "../modules/mvp/types";
import { MvpsState } from "../modules/mvps/types";
import { SpecificMvpsState } from "../modules/specificMvps/types";

interface ApplicationState {
  mvps: MvpsState;
  specificMvps: SpecificMvpsState;
  mvp: MvpState;
  filterMvp: FilterMvpState;
}

export default ApplicationState;
