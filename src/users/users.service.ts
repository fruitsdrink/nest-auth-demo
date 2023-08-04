import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  // 模拟数据库
  private readonly users: User[] = [
    {
      id: 1,
      name: '张三',
      username: 'zhangsan',
      password: '123456',
    },
    {
      id: 2,
      name: '李四',
      username: 'lisi',
      password: '123456',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
