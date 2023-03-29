import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// ============ App ================
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsEntity } from "./entities/products.entity";
import { ProductsRepo } from './repos/products.repo';
import { FilesModule } from '../files/files.module';
import { CategoryRepo } from '../categories/repos/category.repo';
import { CategoryEntity } from '../categories/entities/category.entity';
import { SecurityModule } from '../security/security.module';

@Module({
  providers: [ProductsService, ProductsRepo, CategoryRepo],
  controllers: [ProductsController],
  imports: [
    TypeOrmModule.forFeature([ProductsEntity, CategoryEntity]),
    SecurityModule
  ],
  exports: [ProductsRepo]
})
export class ProductsModule {}
