export interface ContactInfo {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  jobTitle: string;
  street: string;
  city: string;
  latitude: number;
  longitude: number;
  favouriteColour: string;
  profileImage: string;
  id: number;
}

export const emptyContactInfo: ContactInfo = {
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  jobTitle: "",
  street: "",
  city: "",
  latitude: 0,
  longitude: 0,
  favouriteColour: "",
  profileImage: "",
  id: 0,
};
