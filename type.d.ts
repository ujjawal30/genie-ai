export interface TextResponse {
  prompt: string;
  response?: string;
}
export interface ImageResponse {
  prompt: string;
  images?: string[];
}
export interface MusicResponse {
  prompt: string;
  music?: string;
}
export interface VideoResponse {
  prompt: string;
  video?: string;
}
