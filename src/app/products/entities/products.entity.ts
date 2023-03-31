import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";


// ============ Entities ================
import { CartEntity } from "../../cart/entities/cart.entity";
import { CategoryEntity } from "../../categories/entities/category.entity";
import { UUIDEntity } from '../../../shared/entities/uuid.entity';

@Entity('products')
export class ProductsEntity extends UUIDEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'price' })
  price: number;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'quantity' })
  quantity: number;

  @Column({default: ''})
  image: string

  @Column({default: ''})
  brand: string;

  @Column({ name: "category_id" })
  categoryId!: number;

  @OneToMany(() => CartEntity, (cart) => cart.products)
  cart?: CartEntity;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: "category_id", referencedColumnName: "id" })
  category?: CategoryEntity;
}