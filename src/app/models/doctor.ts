export interface Doctor {
  name: string,
  clinic: string,
  experience: string,
  education: string,
  availability: {
    days: string[],
    time: string,
  },
  profile_image: string
}