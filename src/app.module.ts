import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { FormModule } from './modules/forms/form.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, AuthModule, FormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
