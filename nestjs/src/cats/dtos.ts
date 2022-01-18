import { ApiProperty } from '@nestjs/swagger';

export class CreateCatsDTO {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
