export type User = {
    name: string; // Primary Key (PK)
    password: string;
    friends: User[];
    profilePicture: Blob;
};

export type Show = {
    id: number;
    artistId: number; // Foreign Key (FK) referencing an artist
    beginTime: Date;
    endTime: Date;
    stage: string;
    visitors: User[]; // Foreign Key (FK) referencing users
};

export type Artist = {
    name: string;
    profilePicture?: Blob; // Optional profile picture
};

export type FriendRequest = {
    id: number;
    from: User; // The user who sent the request
    to: User; // The user who received the request
    accepted: boolean;
}