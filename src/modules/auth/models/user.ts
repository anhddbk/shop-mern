export interface User{
    name:string;
    email:string;
    passwordHash: string;
    phone:string;
    avatar?: string;
    isAdmin?: boolean | false
    street?:string | '';
    apartment?: string | ''
    zip?: string | '';
    city?: string | '';
    country?: string | ''
  }