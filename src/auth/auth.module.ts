import { Module } from '@nestjs/common';
import {JwtStrategy} from './JwtStrategy';

@Module({
    providers: [JwtStrategy],
    exports: [JwtStrategy],
  })
export class AuthModule {}
