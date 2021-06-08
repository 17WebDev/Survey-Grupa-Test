export type Survey = {
  title: string;
  created_at: Date;
  updated_at: Date;
};

export enum SurveyFilter {
  DRAFT,
  ACTIVE,
  CLOSED,
}
