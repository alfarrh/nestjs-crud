import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './common/auth/auth.module';
import { FormModule } from './modules/forms/form.module';

@Module({
  imports: [UserModule, AuthModule, FormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
