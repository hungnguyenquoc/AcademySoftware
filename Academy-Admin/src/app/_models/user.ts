import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    createdDate: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    lastname: string;
    fullname: string;
    email: string;
    phone: string;
    status: boolean;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos ?: Photo[];
}
