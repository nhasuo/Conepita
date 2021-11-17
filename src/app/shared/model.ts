export interface LoginRequest {
    id: string;
    password: string;
  }

  interface LoginResponseContents {
    userId: string;
    role: string;
    idToken: string;
    accessToken: string;
  }
  
  export interface LoginResponse extends BaseResponseInterface {
    contents: LoginResponseContents[];
  }

  interface BaseResponseInterface {
    appStatus: string;
    code: string;
  }