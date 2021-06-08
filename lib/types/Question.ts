export enum QuestionType {
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
}

export type Question = {
  title: string;
  type: QuestionType;
  choices: string[];
};
