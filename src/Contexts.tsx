import { Context, createContext, Dispatch, SetStateAction } from "react";
import React from "react";

export const ContactsContext = createContext<{contacts: Contact[],setContacts: Dispatch<SetStateAction<Contact[]>>}>(null!);
