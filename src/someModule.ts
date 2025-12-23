import { Module } from '@nestjs/common';
import { SomeService } from './some.service';
import { SomeInterceptor } from './some-interceptor.service';

@Module({
  providers: [SomeService, SomeInterceptor],
  exports: [SomeInterceptor],
})
export class SomeModule {}
