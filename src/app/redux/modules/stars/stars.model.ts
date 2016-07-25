/** Type Definitions */

export interface IStars {
  isFetching?: boolean;
  repo?: string;
  count?: number;
  error?: boolean;
  message?: any;
}

export interface IStarsAction {
  type: string;
  count?: number;
  message?: any;
  repo?: string;
}

export interface IGetStarsOptions {
  repo?: string;
}
