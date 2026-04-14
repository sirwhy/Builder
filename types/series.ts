export interface SeriesCardType {
  id: number;
  title: string;
  chapters: number;
  rating: number;
  views: string;
  genre: string;
  status: 'Ongoing' | 'Completed' | 'Hiatus';
}

export interface LatestUpdateType {
  id: number;
  series: string;
  chapter: string;
  time: string;
}

export interface FeaturedSeriesType extends SeriesCardType {
  description?: string;
}
