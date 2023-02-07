

interface User {
    id?: string;
    email: string;
    timers?: Timer[];
    password: string;
    name: string;
    job: string;
    phone: string;
    avatar?: string;
    avatar_url?: string; 
    created_at?: Date;
    updated_at?: Date;   
}