export type RoomNavigationProps = {
    room: Room;
};
export type MvpNavigationProps = {
    mvp: Mvp;
};


export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            splash: undefined;
            rooms: undefined;
            room: RoomNavigationProps;
            mvp: MvpNavigationProps;
        };
    };
};