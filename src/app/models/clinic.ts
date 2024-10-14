import { Doctor } from './doctor';

export interface Clinic {
  name: string;
  description: string;
  picture: string;
  medicalExaminations: string;
  _id: string,
  doctors?: [Doctor]
}
