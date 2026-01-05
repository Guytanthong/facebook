"use client";

import ContactItem from "./contactitem";
import { FiSearch, FiMoreHorizontal } from "react-icons/fi";

const contacts = [
  "Toon Weerapat",
  "Jessada Malakul",
  "Surapat Asavasakseri",
  "Supakrit Cheewanpairote",
  "Newbie Walking",
];

export default function Contacts() {
  return (
    <div className="mt-4 space-y-2">

      {/* HEADER */}
      <div className="flex items-center justify-between px-2">
        <span className="text-gray-400 text-sm font-semibold">
          Contacts
        </span>

        <div className="flex items-center gap-3 text-gray-400">
          <FiSearch className="cursor-pointer hover:text-gray-200" />
          <FiMoreHorizontal className="cursor-pointer hover:text-gray-200" />
        </div>
      </div>

      {/* CONTACT LIST */}
      <div className="space-y-1">
        {contacts.map((name) => (
          <ContactItem key={name} name={name} />
        ))}
      </div>

    </div>
  );
}

