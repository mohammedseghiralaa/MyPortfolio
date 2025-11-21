"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchCv } from "@/app/services/sanity";
type ContactType = {
  label: string;
  url: string;
};
type InfoCvContextType = {
  MyCv: string;
  ProfileImage: string;
  skills: string[];
  myDescription: string;
  contacts: ContactType[];
};

const InfoCvContext = createContext<InfoCvContextType | undefined>(undefined);

type InfoCvProviderProps = {
  children: ReactNode;
};
export function InfoCvProvider({ children }: InfoCvProviderProps) {
  const [cvInfo, setcvInfo] = useState<InfoCvContextType>({
    MyCv: "",
    ProfileImage: "",
    skills: [],
    myDescription: "",
    contacts: [],
  });

  useEffect(() => {
    fetchCv().then((data) => setcvInfo(data));
  }, []);
  const { MyCv, skills, ProfileImage, myDescription, contacts } = cvInfo;
  return (
    <InfoCvContext.Provider
      value={{ MyCv, skills, ProfileImage, myDescription, contacts }}
    >
      {children}
    </InfoCvContext.Provider>
  );
}

export const useInfoCv = (): InfoCvContextType => {
  const context = useContext(InfoCvContext);
  if (!context) throw new Error("useInfoCv must be used within InfoCvProvider");
  return context;
};
