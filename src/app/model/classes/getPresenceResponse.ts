export interface GetPresenceResponse {
    id: number;
    present: boolean;
    date: Date;
    name: string;
    surname: string;
    username: string;
    fiscalCode: string;
    classId: number;
}