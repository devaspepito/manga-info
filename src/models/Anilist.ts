// Interfaces para la respuesta de AniList GraphQL

export interface AnilistTitle {
	romaji?: string;
	english?: string;
	native?: string;
	userPreferred?: string;
}

export interface AnilistDate {
	year?: number;
	month?: number;
	day?: number;
}

export interface AnilistMangaInfo {
	id: number;
	title: AnilistTitle;
	status?: string;
	startDate?: AnilistDate;
	averageScore?: number;
	meanScore?: number;
	source?: string;
	genres?: string[];
	description?: string;
	notes?: string;
	coverImage?: {
		large?: string;
		medium?: string;
	};
	bannerImage?: string;
	chapters?: number;
	volumes?: number;
	format?: string;
	countryOfOrigin?: string;
}

export interface AnilistResponse {
	data: {
		Media: AnilistMangaInfo;
	};
}

export interface AnilistSearchResponse {
	data: {
		Page: {
			media: AnilistMangaInfo[];
			pageInfo: {
				total: number;
				currentPage: number;
				lastPage: number;
				hasNextPage: boolean;
				perPage: number;
			};
		};
	};
}

export interface MangaInfoDTO {
	id: number | string | null;
	nombre: string;
	estado: string;
	fechaInicio: string;
	averageScore: number | null;
	meanScore: number | null;
	fuente: string;
	generos: string[];
	titulos: {
		romaji?: string;
		english?: string;
		native?: string;
	};
	descripcion: string;
	notas?: string;
	imagenPortada?: string;
	imagenBanner?: string;
	capitulos?: number;
	volumenes?: number;
	formato?: string;
}
