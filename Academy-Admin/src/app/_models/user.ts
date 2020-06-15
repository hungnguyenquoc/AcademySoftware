import { Photo } from './photo';

export interface User {
    file: File;
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
    fullName: string;
    address: string;
    dateOfBirth: Date;
    email: string;
    phone: string;
    status: boolean;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos ?: Photo[];
    userImage: string;
    File: File;
}
