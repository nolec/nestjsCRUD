import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardSchema } from './board.model';
import { BoardsResolver } from './boards.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Board', schema: BoardSchema }]),
  ],
  // controllers: [BoardsController],
  providers: [ BoardsResolver],
})
export class BoardsModule {}
