export interface User {
	id: string;
	usuario: string;
	correo: string;
	contrasena: string;
	foto_perfil?: string;
	nickname?: string;
	created_at?: Date;
	updated_at?: Date;
}

export interface UserCreateDTO {
	usuario: string;
	correo: string;
	contrasena: string;
	nickname?: string;
	foto_perfil?: string;
}

export interface UserUpdateDTO {
	usuario?: string;
	correo?: string;
	nickname?: string;
	foto_perfil?: string;
}

export interface UserLoginDTO {
	correo: string;
	contrasena: string;
}

export interface UserResponseDTO {
	id: string;
	usuario: string;
	correo: string;
	foto_perfil?: string;
	nickname?: string;
	created_at?: Date;
	updated_at?: Date;
}
