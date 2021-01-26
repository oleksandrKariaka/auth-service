import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import { User } from '../models';

@EntityRepository(User)
export class UserDataRepository extends Repository<User> { }

export default () => getCustomRepository(UserDataRepository);