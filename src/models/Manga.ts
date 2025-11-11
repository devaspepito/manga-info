export interface Manga {
	id: string;
	usuario_id: string;
	nombre: string;
	archivo: string;
	peso?: number;
	fecha_upload: Date;
	created_at?: Date;
	updated_at?: Date;
}

export interface MangaCreateDTO {
	nombre: string;
	archivo: string;
	peso?: number;
}

export interface MangaUpdateDTO {
	nombre?: string;
	archivo?: string;
	peso?: number;
}

export interface MangaResponseDTO {
	id: string;
	usuario_id: string;
	nombre: string;
	archivo: string;
	peso?: number;
	fecha_upload: Date;
	created_at?: Date;
	updated_at?: Date;
}
