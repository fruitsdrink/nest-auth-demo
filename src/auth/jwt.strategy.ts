import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 从请求头中获取token
      ignoreExpiration: false,
      secretOrKey: 'secretKey', // 密钥，与login方法中的密钥一致 或与module中的密钥一致
    });
  }

  async validate(payload: any) {
    // 其它验证，比如用户是否存在，用户是否被禁用等

    // return的对象会被注入到request.user中
    return {
      id: payload.sub,
      name: payload.name,
    };
  }
}
