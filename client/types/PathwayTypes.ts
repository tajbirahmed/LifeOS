import { StageType } from "./PathwayTypes/Pathway";

export type PathwayPromptType = {
    type: StageType;
    context: string; 
    language: string;
    parentId: string | null;
}

export enum GeneratedQuestionType {
    OPEN_ENDED = "OPEN_ENDED",
    YES_NO = "YES_NO",
    MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
    DATE = "DATE"
}

export type GeneratedQuestion = {
    type: GeneratedQuestionType;
    question: string;
    options?: string[];
}