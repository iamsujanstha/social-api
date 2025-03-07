import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/modules/user/user.module';
import { PostsModule } from 'src/modules/post/post.module';
import { CommentsModule } from 'src/modules/comment/comment.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [UsersModule, PostsModule, CommentsModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
