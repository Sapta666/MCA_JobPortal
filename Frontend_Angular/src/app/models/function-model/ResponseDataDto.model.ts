import { BasicResponseDto } from "./BasicResponseDto.model";

export interface ResponseDataDto<T> extends BasicResponseDto {
    Data: T;
}