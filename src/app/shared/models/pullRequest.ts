import { IRequestViewer } from "./requestViewer";

export interface IPullRequest {
    id: string;
    number: string;
    title: string;
    state: string;
    created_at: string;
    requested_reviewers: IRequestViewer[];
}