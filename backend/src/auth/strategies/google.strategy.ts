import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { access } from 'fs';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { GOOGLE } from 'src/@config/constants.config';

@Injectable()
export class CustomerGoogleStrategy extends PassportStrategy(
  Strategy,
  'google-customer',
) {
  constructor() {
    super({

      clientID: GOOGLE.client_id,
      clientSecret: GOOGLE.client_secret,
      callbackURL: GOOGLE.customer_redirect_uri,
      scope: ['email', 'profile'],
    });
  }
  
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    done(null, profile);
  }
}
