export interface Project {
  cover: string;
  name: string;
  description: string;
  buttons?: {text: string; link: string}[];
  featured?: boolean;
}
