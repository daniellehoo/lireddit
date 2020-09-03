import { EntityManager, IDatabaseDriver, Connection} from '@mkro-orm/core';

export type MyContext { 
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
}