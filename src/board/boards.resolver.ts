import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board } from './board.model';

@Resolver()
export class BoardsResolver {
  constructor(
    @InjectModel('Board') private readonly boardModel: Model<Board>,
  ) {}

  @Query('boards')
  boards() {
    return this.boardModel.find();
  }

  @Query('getBoard')
  getBoard(@Args('id') id: string) {
    const board = this.boardModel.findById(id);
    return board;
  }

  @Mutation()
  createBoard(
    @Args('writer') writer: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
  ) {
    const newBoard = new this.boardModel({
      writer: writer,
      title: title,
      contents: contents,
    });
    const result = newBoard.save();
    return result;
  }

  @Mutation()
  updateBoard(
    @Args('id') id: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
  ) {
    const updatedBoard = this.boardModel.findByIdAndUpdate(
      { _id: id },
      { title: title, contents: contents },
    );

    return updatedBoard;
  }

  @Mutation()
  deleteBoard(@Args('id') id : string){
    const deletedBoard = this.boardModel.findByIdAndRemove(id);
    return deletedBoard;
  }
}
