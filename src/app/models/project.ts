export interface Project {
  cover: string;
  name: string;
  description: string;
  buttons?: {text: string; link: string}[];
  featured?: boolean;
  languages?: Language[];
  status?: string;
}

export interface Language {
  label: string,
  class: string,
  suffix?: string
}
