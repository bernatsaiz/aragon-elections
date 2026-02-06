const base = typeof import.meta.env !== "undefined" ? (import.meta.env.BASE_URL || "/") : "/";

export const podcastMeta = {
  title: "Elecciones en Aragón",
  subtitle: "Todo sobre las elecciones autonómicas de Aragón",
  description: "Un podcast breve que explica el contexto político, los candidatos y la aritmética parlamentaria.",
};

export const episodes = [
  { title: "La Apuesta Estratégica", description: "La decisión de convocar elecciones anticipadas.", duration: "5:32", coverSrc: base + "ep1.webp", src: base + "audio/ep1.mp3" },
  { title: "El Duelo Personal", description: "El debate entre Azcón y Alegría.", duration: "6:01", coverSrc: base + "ep2.webp", src: base + "audio/ep2.mp3" },
  { title: "La Llave del Territorio", description: "Teruel Existe, CHA y PAR.", duration: "5:45", coverSrc: base + "ep3.webp", src: base + "audio/ep3.mp3" },
  { title: "Fragmentación y Ruido", description: "Comunicación política y bloque de izquierdas.", duration: "5:18", coverSrc: base + "ep4.webp", src: base + "audio/ep4.mp3" },
  { title: "El Rompecabezas de la Gobernabilidad", description: "Aritmética parlamentaria y pactos.", duration: "5:55", coverSrc: base + "ep5.webp", src: base + "audio/ep5.mp3" },
];
