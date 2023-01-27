export type RoomNavigationProps = {
    room: Room;
};
export type MvpNavigationProps = {
    mvp: Mvp;
};


export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            rooms: undefined;
            room: RoomNavigationProps;
            mvp: MvpNavigationProps;
        };
    };
};