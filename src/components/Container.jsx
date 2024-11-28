import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import {
  FACEBOOK_CHARACTER_LIMIT,
  INSTAGRAM_CHARACTER_LIMIT,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  // calculate stats
  const stats = {
    numberOfWords: text.split(/\s+/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharacterLeft: INSTAGRAM_CHARACTER_LIMIT - text.length,
    facebookChareacterLeft: FACEBOOK_CHARACTER_LIMIT - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
