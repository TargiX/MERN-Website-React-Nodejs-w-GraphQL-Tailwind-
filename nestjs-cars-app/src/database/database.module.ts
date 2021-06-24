import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(private connection: Connection) {
     if (connection.isConnected) {
        console.log('DB Connected Successfully');
     }
  }
}
