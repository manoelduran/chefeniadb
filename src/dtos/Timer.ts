

interface Timer {
    id?: string;
    user_id: string;
    user: User;
    mvp_id: string;
    mvp: Mvp;
    time: number;
    created_at?: Date;
    updated_at?: Date;
    expired_at?: Date;
}