import axios from "axios";
import type { MangaInfoDTO } from "../models/Anilist";

interface PopularMangasResponse {
  success: boolean;
  data: {
    mangas: MangaInfoDTO[];
    pageInfo: {
      total: number;
      currentPage: number;
      lastPage: number;
      hasNextPage: boolean;
      perPage: number;
    };
  };
}

export interface PageInfo {
  total: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
  perPage: number;
}

export interface PaginatedMangasResult {
  mangas: MangaInfoDTO[];
  pageInfo: PageInfo;
}

export const getPopularMangas = async (
  page: number = 1,
  perPage: number = 50,
): Promise<MangaInfoDTO[]> => {
  try {
    const response = await axios.get<PopularMangasResponse>(
      `https://manga-info-back.vercel.app/api/anilist/popular?page=${page}&perPage=${perPage}`,
    );
    console.log(response.data.data.mangas);
    return response.data.data.mangas;
  } catch (error) {
    console.log("Error fetching popular mangas:", error);
    return [];
  }
};

export const getPopularMangasWithPageInfo = async (
  page: number = 1,
  perPage: number = 50,
): Promise<PaginatedMangasResult> => {
  try {
    const response = await axios.get<PopularMangasResponse>(
      `https://manga-info-back.vercel.app/api/anilist/popular?page=${page}&perPage=${perPage}`,
    );
    return {
      mangas: response.data.data.mangas,
      pageInfo: response.data.data.pageInfo,
    };
  } catch (error) {
    console.log("Error fetching popular mangas:", error);
    return {
      mangas: [],
      pageInfo: {
        total: 0,
        currentPage: 1,
        lastPage: 1,
        hasNextPage: false,
        perPage: perPage,
      },
    };
  }
};
