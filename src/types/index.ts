export * from './auth';
export * from './my-info';
export * from './detail';

// ============================ 공통 ============================
/** 2023/10/23 - 공통적인 응답 Type - by sineTlsl */
export interface CommonResponseType {
  reason: string;
  result: boolean;
}
