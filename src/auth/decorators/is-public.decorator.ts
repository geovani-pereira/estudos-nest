import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const IsPlublic = () => SetMetadata(IS_PUBLIC_KEY, true);
