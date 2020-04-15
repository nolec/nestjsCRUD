import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  async getAllBoards() {
    try {
      const results = await this.boardsService.selectAllBoards();
      return results as Board[];
    } catch (error) {
      return { message: '가져오기 실패' };
    }
  }

  @Post()
  async addNewBoard(
    @Body('writer') nwriter: string,
    @Body('title') ntitle: string,
    @Body('contents') ncontents: string,
  ) {
    try {
      const result = await this.boardsService.insertNewBoard(
        nwriter,
        ntitle,
        ncontents,
      );
      return result as Board;
    } catch (error) {
      return { message: '등록 실패', error };
    }
  }

  @Get(':id')
  async getOneBoard(@Param('id') param: string) {
    try {
      const result = await this.boardsService.selectOneBoard(param);
      return result;
    } catch (error) {
      return { message: '가져오기 실패', error };
    }
  }

  @Patch(':id')
  async updatedBoard(
    @Param('id') param: string,
    @Body('title') ntitle: string,
    @Body('contents') ncontents: string,
  ) {
    try {
      const result = await this.boardsService.updatedBoard(
        param,
        ntitle,
        ncontents,
      );
      return result;
    } catch (error) {
      return { message: '업데이트가 실패했습니다.', error };
    }
  }

  @Delete(':id')
  async deleteBoard(@Param('id') param) {
    try {
      const result = await this.boardsService.deleteBoard(param);
      return { message: '삭제 성공' };
    } catch (error) {
      return { message: '삭제 실패', error };
    }
  }
}
