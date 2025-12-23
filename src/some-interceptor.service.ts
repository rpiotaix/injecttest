import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { SomeService } from './some.service';

@Injectable()
export class SomeInterceptor implements NestInterceptor {
  constructor(private readonly svc: SomeService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('SomeInterceptor');
    return next.handle();
  }
}
