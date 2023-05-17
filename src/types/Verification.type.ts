export interface Verification {
   id: number;
   name: string; // 이름
   major: string; // 전공
   studentId: string; // 학번
   issued: boolean; // 팔찌 발급 여부
   turn: number; // 예매번호
   code: string; // sms 인증코드
}
