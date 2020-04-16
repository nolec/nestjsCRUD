import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './board/boards.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: './schema.gql' }),
    BoardsModule,
    MongooseModule.forRoot(
      'mongodb+srv://saracen:saracen@nolec-a3hlx.mongodb.net/nest?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
