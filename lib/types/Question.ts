export enum QuestionType {
  RADIO = 'radiogroup',
  CHECKBOX = 'checkbox',
}

export type Question = {
  title: string;
  type: QuestionType;
  choices: string[];
};
